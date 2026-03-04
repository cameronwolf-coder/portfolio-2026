import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF(htmlFile, pdfFile) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const htmlPath = join(__dirname, htmlFile);
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: join(__dirname, pdfFile),
    format: 'Letter',
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: false
  });

  await browser.close();
  console.log(`Generated: ${pdfFile}`);
}

// Generate both PDFs
await generatePDF('contact-sales-analytics.html', 'contact-sales-analytics.pdf');
await generatePDF('gtm-command-center.html', 'gtm-command-center.pdf');

console.log('Done!');
