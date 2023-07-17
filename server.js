const puppeteer = require("puppeteer");

async function srujan() {
  // Launch headful browser
  const browser = await puppeteer.launch({ headless: false });

  // Create a new page
  const page = await browser.newPage();

  // Go to the website
  await page.goto("https://swap.defillama.com/");

  // Fill the form

  // Set the new content for a specific div element using evaluate()
  await page.evaluate(() => {
    const divElement = document.querySelector(
      "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div:nth-child(1) > div > div > div.css-0"
    );
    divElement.textContent = "Arbitrum One"; // Set the new content
  });

  // Type a new value in an input field
  const xpath1 = '//*[@id="__next"]/div/div/div[2]/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div/input';
  const inputElement1 = await page.waitForXPath(xpath1);
  await inputElement1.click({ clickCount: 3 }); // Select existing value (optional)
  await inputElement1.type("12", { delay: 100 }); // Type the new value

  // Click a button
  await page.click(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button",
  );

  // Type a value in an input field
  await page.type(".chakra-input", "WBTC", { delay: 500 });

  // Click the first option in a dropdown list
  const divSelector1 = '#chakra-modal-\\:rd\\: > div.List > div > div:first-child';
  await page.click(divSelector1);

  // Click a button
  await page.click(
    "#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button ",
    { delay: 300 }
  );

  // Type a value in an input field
  await page.type(".chakra-input", "USDC", { delay: 500 });

  // Click the Second option in a dropdown list
  // const divSelector2 = '#chakra-modal-\\:r1n\\: > div.List > div > div:nth-child(2)';
  // await page.click(divSelector2);
  

  // Wait for a specific amount of time
  await page.waitForTimeout(7000); // Wait for 7 seconds (7000 milliseconds)

  // Click a button
  await page.click('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-2.cObIGF > div:nth-child(5) > div:nth-child(1)');
}

srujan();
