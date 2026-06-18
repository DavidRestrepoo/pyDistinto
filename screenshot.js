// screenshot.js - captures full page screenshot using Playwright
const { chromium } = require('playwright');
(async () => {
  const maxAttempts = 10;
  const delay = ms => new Promise(res => setTimeout(res, ms));
  let attempt = 0;
  let page;
  while (attempt < maxAttempts) {
    try {
      const browser = await chromium.launch();
      const context = await browser.newContext();
      page = await context.newPage();
      await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
      // Full page screenshot
      await page.screenshot({ path: 'public/project_screenshot.png', fullPage: true });
      await browser.close();
      console.log('Screenshot saved to public/project_screenshot.png');
      process.exit(0);
    } catch (e) {
      console.error('Attempt', attempt + 1, 'failed:', e.message);
      attempt++;
      await delay(2000);
    }
  }
  console.error('Failed to capture screenshot after', maxAttempts, 'attempts');
  process.exit(1);
})();
