import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(currentFilePath), "..");
const publicDirectory = path.join(projectRoot, "public");
const distDirectory = path.join(projectRoot, "dist");
const outputFileName = "Antoine_Jaussoin_CV.rtf";
const outputRelativePath = path.join("downloads", outputFileName);
const publicOutputPath = path.join(publicDirectory, outputRelativePath);
const distOutputPath = path.join(distDirectory, outputRelativePath);
const staleFileNames = ["Antoine_Jaussoin_CV.docx"];
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

async function loadCvData() {
  const dataFilePath = path.join(projectRoot, "src", "data", "en.ts");
  let source = await readFile(dataFilePath, "utf8");

  const importedValueNames = [
    ...source.matchAll(
      /^import\s+([A-Za-z_$][\w$]*)\s+from\s+["'][^"']+["'];?$/gm,
    ),
  ].map((match) => match[1]);

  const importStubs = importedValueNames
    .map((name) => `var ${name} = "";`)
    .join("\n");

  source = source.replace(/^import .*$/gm, "");
  source = source.replace(/:\s*Cv\b/g, "");
  source = source.replace(/export default myCv;?\s*$/m, "");
  source = source.replace(/\bconst\b/g, "var");

  const createCvData = new Function(`${importStubs}\n${source}\nreturn myCv;`);

  return createCvData();
}

function markdownToPlainText(markdown) {
  if (!markdown) {
    return "";
  }

  return markdown
    .replace(/\r\n/g, "\n")
    .replace(/  \n/g, "\n")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  const parsedDate = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(parsedDate.valueOf())) {
    return value;
  }

  return dateFormatter.format(parsedDate);
}

function getYearsFromStartYear(startYear) {
  const start = Number(startYear);

  if (!Number.isFinite(start)) {
    return 0;
  }

  return Math.max(new Date().getUTCFullYear() - start, 0);
}

function stripProtocol(url) {
  return url.replace(/^https?:\/\//, "");
}

function createParagraph(style, parts = []) {
  return { style, parts };
}

function createTextParagraph(style, text) {
  return createParagraph(style, text ? [{ text }] : []);
}

function createLabelValueParagraph(style, label, value) {
  return createParagraph(style, [
    { text: label, bold: true },
    { text: value },
  ]);
}

function pushSpacer(paragraphs) {
  if (paragraphs.length > 0 && paragraphs.at(-1)?.style !== "spacer") {
    paragraphs.push(createParagraph("spacer"));
  }
}

function pushSection(paragraphs, title) {
  pushSpacer(paragraphs);
  paragraphs.push(createTextParagraph("section", title));
}

function pushTextBlock(paragraphs, text, style = "body") {
  const normalizedText = markdownToPlainText(text);

  if (!normalizedText) {
    return;
  }

  for (const line of normalizedText.split("\n")) {
    paragraphs.push(createTextParagraph(style, line));
  }
}

function trimTrailingSpacers(paragraphs) {
  while (paragraphs.at(-1)?.style === "spacer") {
    paragraphs.pop();
  }
}

function buildDocumentParagraphs(cvData) {
  const work = [...cvData.work].sort((left, right) =>
    right.dates.from.localeCompare(left.dates.from),
  );
  const education = [...cvData.education].sort((left, right) =>
    right.date.localeCompare(left.date),
  );
  const paragraphs = [
    createTextParagraph("name", cvData.name),
    createTextParagraph("title", cvData.title),
    createTextParagraph(
      "subtitle",
      cvData.subtitle.replace(/\s*-\s*/g, " / "),
    ),
    createLabelValueParagraph("contact", "Email: ", cvData.email),
    createLabelValueParagraph("contact", "Phone: ", cvData.phone),
    createLabelValueParagraph(
      "contact",
      "Website: ",
      stripProtocol(cvData.website),
    ),
    createLabelValueParagraph("contact", "Location: ", cvData.address2),
  ];

  pushSection(paragraphs, "PROFILE");
  pushTextBlock(paragraphs, cvData.profile);

  pushSection(paragraphs, "EXPERIENCE");
  for (const job of work) {
    const fromDate = formatDate(job.dates.from);
    const toDate = job.dates.to ? formatDate(job.dates.to) : "Present";

    paragraphs.push(
      createParagraph("entryHeading", [
        { text: job.title, bold: true },
        { text: ` | ${job.company}` },
      ]),
    );
    paragraphs.push(
      createTextParagraph(
        "meta",
        `${job.location} | ${job.type} | ${fromDate} - ${toDate}`,
      ),
    );

    if (job.techs?.length) {
      paragraphs.push(
        createLabelValueParagraph(
          "labelValue",
          "Technologies: ",
          job.techs.join(", "),
        ),
      );
    }

    pushTextBlock(paragraphs, job.shortDescription || job.description);
    pushSpacer(paragraphs);
  }

  trimTrailingSpacers(paragraphs);

  pushSection(paragraphs, "EDUCATION");
  for (const item of education) {
    paragraphs.push(
      createParagraph("entryHeading", [
        { text: item.diploma, bold: true },
        { text: ` | ${item.school}` },
      ]),
    );
    paragraphs.push(
      createTextParagraph(
        "meta",
        `${item.location} | ${formatDate(item.date)}`,
      ),
    );

    pushTextBlock(paragraphs, item.description);

    pushSpacer(paragraphs);
  }

  trimTrailingSpacers(paragraphs);

  pushSection(paragraphs, "SKILLS");
  for (const skill of cvData.skills) {
    paragraphs.push(
      createParagraph("entryHeading", [
        { text: skill.name, bold: true },
        {
          text: ` | ${skill.level} | ${getYearsFromStartYear(skill.startYear)} years`,
        },
      ]),
    );

    if (skill.related?.length) {
      paragraphs.push(
        createLabelValueParagraph(
          "labelValue",
          "Related: ",
          skill.related.join(", "),
        ),
      );
    }

    pushTextBlock(paragraphs, skill.shortDescription || skill.description);
    pushSpacer(paragraphs);
  }

  trimTrailingSpacers(paragraphs);

  return paragraphs;
}

function escapeRtf(text) {
  let escaped = "";

  for (const character of text) {
    if (character === "\\") {
      escaped += "\\\\";
      continue;
    }

    if (character === "{") {
      escaped += "\\{";
      continue;
    }

    if (character === "}") {
      escaped += "\\}";
      continue;
    }

    if (character === "\t") {
      escaped += "\\tab ";
      continue;
    }

    const codePoint = character.codePointAt(0);

    if (codePoint && codePoint > 127) {
      escaped += `\\u${codePoint > 32767 ? codePoint - 65536 : codePoint}?`;
      continue;
    }

    escaped += character;
  }

  return escaped;
}

function renderParagraphParts(parts) {
  return parts
    .map((part) => {
      const controls = [];

      if (part.bold) {
        controls.push("\\b");
      }

      if (part.italic) {
        controls.push("\\i");
      }

      if (part.underline) {
        controls.push("\\ul");
      }

      if (controls.length === 0) {
        return escapeRtf(part.text);
      }

      return `{${controls.join("")} ${escapeRtf(part.text)}}`;
    })
    .join("");
}

function renderRtf(paragraphs) {
  const styleControls = {
    name: "\\pard\\plain\\qc\\f0\\fs34\\sa120",
    title: "\\pard\\plain\\qc\\f0\\fs26\\sa60",
    subtitle: "\\pard\\plain\\qc\\f0\\fs22\\sa220",
    contact: "\\pard\\plain\\f0\\fs22\\sa40",
    section: "\\pard\\plain\\f0\\fs24\\sb160\\sa100",
    entryHeading: "\\pard\\plain\\f0\\fs23\\sa30",
    meta: "\\pard\\plain\\f0\\fs20\\sa30",
    labelValue: "\\pard\\plain\\f0\\fs21\\sa40",
    body: "\\pard\\plain\\f0\\fs22\\sa60",
    spacer: "\\pard\\plain\\f0\\fs8\\sa60",
  };

  const renderedParagraphs = paragraphs.map((paragraph) => {
    const controls = styleControls[paragraph.style] ?? styleControls.body;
    const effectiveParts =
      paragraph.style === "name"
        ? paragraph.parts.map((part) => ({ ...part, bold: true }))
        : paragraph.style === "title"
          ? paragraph.parts.map((part) => ({ ...part, bold: true }))
          : paragraph.style === "subtitle"
            ? paragraph.parts.map((part) => ({ ...part, italic: true }))
            : paragraph.style === "section"
              ? paragraph.parts.map((part) => ({ ...part, bold: true }))
              : paragraph.style === "meta"
                ? paragraph.parts.map((part) => ({ ...part, italic: true }))
                : paragraph.parts;
    const content = effectiveParts?.length
      ? renderParagraphParts(effectiveParts)
      : "";

    return `${controls} ${content}\\par`;
  });

  return [
    "{\\rtf1\\ansi\\deff0",
    "{\\fonttbl{\\f0 Arial;}}",
    "\\viewkind4\\uc1",
    ...renderedParagraphs,
    "}",
  ].join("\n");
}

async function removeStaleOutputs() {
  const stalePaths = staleFileNames.flatMap((fileName) => [
    path.join(publicDirectory, "downloads", fileName),
    path.join(distDirectory, "downloads", fileName),
  ]);

  await Promise.all(
    stalePaths.map(async (stalePath) => {
      try {
        await unlink(stalePath);
      } catch (error) {
        if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
          return;
        }

        throw error;
      }
    }),
  );
}

async function writeOutputs(rtfContent) {
  await Promise.all([
    mkdir(path.dirname(publicOutputPath), { recursive: true }),
    mkdir(path.dirname(distOutputPath), { recursive: true }),
  ]);

  await Promise.all([
    writeFile(publicOutputPath, rtfContent, "utf8"),
    writeFile(distOutputPath, rtfContent, "utf8"),
  ]);
}

async function exportRtf() {
  const cvData = await loadCvData();
  const documentParagraphs = buildDocumentParagraphs(cvData);
  const rtfContent = renderRtf(documentParagraphs);

  await removeStaleOutputs();
  await writeOutputs(rtfContent);

  console.log(`RTF generated: ${publicOutputPath}`);
  console.log(`RTF copied to: ${distOutputPath}`);
  console.log(`Download URL: /downloads/${outputFileName}`);
}

exportRtf().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});