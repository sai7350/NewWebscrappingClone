const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Open Scrapingbee's website
  await page.goto('https://www.nobroker.in/property/sale/pune/Hinjewadi?searchParam=W3sibGF0IjoxOC41OTEyNzE2LCJsb24iOjczLjczODkwODk5OTk5OTk5LCJwbGFjZUlkIjoiQ2hJSjd4c0VTTUM3d2pzUjVkN0R3MXJyeWRBIiwicGxhY2VOYW1lIjoiSGluamV3YWRpIn1d&radius=2.0&city=pune&locality=Hinjewadi&type=BHK3');

  // Get the first h1 element using page.$x
  let first_h1_element = await page.$x('/html/body/div[5]/div/main/div[2]/div[2]/div[2]/div[1]/div/article[2]/div[3]/div/section/div[1]/div/div');

  // Get all p elements using page.$x
//   let all_p_elements = await page.$x("//div");

//   Get the textContent of the h1 element
  let h1_value = await page.evaluate(el => el.textContent, first_h1_element[0])

  // The total number of p elements on the page
//   let p_total = await page.evaluate(el => el.length, all_p_elements)

  console.log(first_h1_element);

//   console.log(p_total);

  // Close browser.
  await browser.close();
})();

// Stack Code Starts Here 

// const puppeteer = require("puppeteer");

// async function scrape () {

//     const browser = await puppeteer.launch({headless: false});
//     const page =  await browser.newPage();
//     await page.goto("https://www.nobroker.in/property/sale/pune/Hinjewadi?searchParam=W3sibGF0IjoxOC41OTEyNzE2LCJsb24iOjczLjczODkwODk5OTk5OTk5LCJwbGFjZUlkIjoiQ2hJSjd4c0VTTUM3d2pzUjVkN0R3MXJyeWRBIiwicGxhY2VOYW1lIjoiSGluamV3YWRpIn1d&radius=2.0&city=pune&locality=Hinjewadi&type=BHK3", {waitUntil: "networkidle2"})
//     await page.waitForXPath('//*[@id="8a9fc4838981d02e018981de962208e6"]/section/div[1]/div/div');

//     let [el] = await page.$x('//*[@id="8a9fc4838981d02e018981de962208e6"]/section/div[1]/div/div');

//     // console.log()

//     const names = await page.evaluate(name => name.innerText, el);
//     console.log(names);


//     await browser.close();
// };

// scrape();