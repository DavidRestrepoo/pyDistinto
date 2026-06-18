const { chromium } = require('playwright');
const path = 'C:/Users/DERO/.gemini/antigravity-ide/brain/a241c208-6d99-4269-a407-f61a7420bbda/project_full_screenshot.png';

(async () => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    await page.screenshot({ path, fullPage: true });
    await browser.close();
    console.log('Screenshot saved to:', path);
    process.exit(0);
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
})();
