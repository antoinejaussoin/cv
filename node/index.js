const puppeteer = require('puppeteer');
const fs = require('fs');
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3001', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4', scale: 0.6, margin: { bottom: 0, left: 0, right: 0, top: 0} });

	fs.writeFileSync('./pdf.pdf', pdf);
 
  await browser.close();
};

printPDF();