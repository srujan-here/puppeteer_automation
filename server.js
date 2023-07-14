const puppeteer = require('puppeteer');

async function run() {
  // Launch headful browser
  const browser = await puppeteer.launch({ headless: false });

  // Create a new page
  const page = await browser.newPage();

  // Go to the website
  await page.goto('https://swap.defillama.com/');

  // Fill the form
  await page.type('#chain', 'Arbitrum One');
  await page.type('#sellInput', '12');
  await page.type('#sellTokenSelect input', 'WBTC');
  await page.type('#buyTokenSelect input', 'USDC');

  // Wait for the swap options to appear
  await page.waitForSelector('.swap-options');

  // Select the second option
  await page.click('.swap-options li:nth-child(2)');

  // Leave the browser window open
  // await browser.close();
}

run();
