import { execFileSync } from "node:child_process";
import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { access, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer-core";

const currentFilePath = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(currentFilePath), "..");
const distDirectory = path.join(projectRoot, "dist");
const publicDirectory = path.join(projectRoot, "public");
const pdfRoutePath = "/cv-pdf/";
const outputRelativePath = path.join("downloads", "Antoine_Jaussoin_CV.pdf");
const publicOutputPath = path.join(publicDirectory, outputRelativePath);
const distOutputPath = path.join(distDirectory, outputRelativePath);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function findBrowserExecutable() {
  const configuredPath = process.env.PUPPETEER_EXECUTABLE_PATH;
  const knownPaths = [
    configuredPath,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
    "/snap/bin/chromium",
  ].filter(Boolean);

  for (const candidate of knownPaths) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  for (const command of ["google-chrome", "chromium", "chromium-browser"]) {
    try {
      const discovered = execFileSync("which", [command], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (discovered) {
        return discovered;
      }
    } catch {
      // Continue checking fallbacks.
    }
  }

  throw new Error(
    "No Chromium or Chrome executable was found. Set PUPPETEER_EXECUTABLE_PATH to a valid browser binary.",
  );
}

function resolveFilePath(requestUrl) {
  const url = new URL(requestUrl ?? "/", "http://127.0.0.1");
  let relativePath = decodeURIComponent(url.pathname);

  if (relativePath.endsWith("/")) {
    relativePath += "index.html";
  } else if (!path.extname(relativePath)) {
    relativePath = path.join(relativePath, "index.html");
  }

  const safeRelativePath = path.normalize(relativePath).replace(/^[/\\]+/, "");
  const absolutePath = path.resolve(distDirectory, safeRelativePath);

  if (!absolutePath.startsWith(distDirectory)) {
    return null;
  }

  return absolutePath;
}

async function startStaticServer() {
  return await new Promise((resolve, reject) => {
    const server = createServer(async (request, response) => {
      try {
        const filePath = resolveFilePath(request.url);
        if (!filePath) {
          response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Forbidden");
          return;
        }

        let fileStats;
        try {
          fileStats = await stat(filePath);
        } catch {
          response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Not found");
          return;
        }

        if (fileStats.isDirectory()) {
          response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Forbidden");
          return;
        }

        const contentType = mimeTypes[path.extname(filePath)] ?? "application/octet-stream";
        response.writeHead(200, {
          "Cache-Control": "no-store",
          "Content-Type": contentType,
        });
        createReadStream(filePath).pipe(response);
      } catch (error) {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Failed to serve the built site");
        console.error(error);
      }
    });

    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Failed to start the local PDF export server."));
        return;
      }
      resolve({ port: address.port, server });
    });
  });
}

async function assertBuildOutputExists() {
  await access(path.join(distDirectory, "cv-pdf", "index.html"));
}

async function validatePdfPageCount(pdfBytes) {
  const pdfDocument = await PDFDocument.load(pdfBytes);
  const pageCount = pdfDocument.getPageCount();

  if (pageCount > 2) {
    throw new Error(`Generated PDF is ${pageCount} pages; expected at most 2.`);
  }

  return pageCount;
}

async function writePdfOutputs(pdfBytes) {
  await Promise.all([
    mkdir(path.dirname(publicOutputPath), { recursive: true }),
    mkdir(path.dirname(distOutputPath), { recursive: true }),
  ]);

  await Promise.all([
    writeFile(publicOutputPath, pdfBytes),
    writeFile(distOutputPath, pdfBytes),
  ]);
}

async function exportPdf() {
  await assertBuildOutputExists();

  const browserExecutablePath = findBrowserExecutable();
  const { port, server } = await startStaticServer();
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: browserExecutablePath,
      headless: true,
      args: [
        ...(process.platform === "linux"
          ? ["--no-sandbox", "--disable-setuid-sandbox"]
          : []),
        "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();
    await page.emulateMediaType("print");
    await page.goto(`http://127.0.0.1:${port}${pdfRoutePath}`, {
      waitUntil: "networkidle0",
    });
    await page.waitForSelector(".pdf-page");
    await page.evaluate(async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }
    });

    console.log("Generating PDF...", publicOutputPath);

    const pdfBytes = await page.pdf({
      preferCSSPageSize: true,
      printBackground: true,
    });

    await writePdfOutputs(pdfBytes);

    const pageCount = await validatePdfPageCount(pdfBytes);
    console.log(`PDF generated: ${publicOutputPath}`);
    console.log(`PDF copied to: ${distOutputPath}`);
    console.log(`PDF pages: ${pageCount}`);
  } finally {
    if (browser) {
      await browser.close();
    }

    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(undefined);
      });
    });
  }
}

exportPdf().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});