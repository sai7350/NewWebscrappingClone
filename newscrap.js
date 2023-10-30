//
const { PrismaClient } = require('@prisma/client');
const puppeteer = require("puppeteer");

async function scrapeNoBroker() {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  try {
    const pageURL =
      "https://www.nobroker.in/property/sale/pune/Hinjewadi?searchParam=W3sibGF0IjoxOC41OTEyNzE2LCJsb24iOjczLjczODkwODk5OTk5OTk5LCJwbGFjZUlkIjoiQ2hJSjd4c0VTTUM3d2pzUjVkN0R3MXJyeWRBIiwicGxhY2VOYW1lIjoiSGluamV3YWRpIn1d&radius=2.0&city=pune&locality=Hinjewadi&type=BHK1";

    await page.goto(pageURL, { waitUntil: "domcontentloaded" });

    let data = [];

    const maxScrolls = 5;
    let scrollCount = 0;

    const selectors = {
      propertyTitle: ".nb__7nqQI",
      propertyPrice: "#minDeposit",
    };

    while (scrollCount < maxScrolls) {
      const scrapedData = await page.evaluate((selectors) => {
        const properties = [];
        const titleElements = document.querySelectorAll(
          selectors.propertyTitle
        );
        const priceElements = document.querySelectorAll(
          selectors.propertyPrice
        );

        for (let i = 0; i < titleElements.length; i++) {
          const property = {
            // title: titleElements[i].textContent.trim(),
            price: priceElements[i].textContent.trim(),
          };
          properties.push(property);
        }

        return properties;
      }, selectors);

      data = data.concat(scrapedData);

      await autoScroll(page);

      await page.waitForTimeout(2000);

      scrollCount++;
    }

    const prices = data.map((property) => property.price);
    const extractedPrices = prices.map((text) => {
      const matchLacs = text.match(/₹([\d.]+) Lacs/);
      const matchCrores = text.match(/₹([\d.]+) Crores/);

      if (matchLacs) {
        return matchLacs[1] + " Lacs";
      } else if (matchCrores) {
        return matchCrores[1] + " Crores";
      } else {
        return null;
      }
    });

    console.log(extractedPrices);

    function convertLakhOrCroreStringToNumber(valueString) {
      if (!valueString) {
        return null; // Handle null or undefined values
      }

      // Check if the string contains 'Lacs' or 'Crores' and perform the conversion
      if (valueString.includes("Lacs")) {
        const numericValue = parseFloat(valueString.replace(/[^\d.]/g, ""));
        if (!isNaN(numericValue)) {
          return numericValue * 100000; // 1 Lakh = 100,000
        }
      } else if (valueString.includes("Crores")) {
        const numericValue = parseFloat(valueString.replace(/[^\d.]/g, ""));
        if (!isNaN(numericValue)) {
          return numericValue * 10000000; // 1 Crore = 10,000,000
        }
      }

      return null; // Return null for unrecognized formats
    }

    function formatPriceWithUnits(price) {
      if (price >= 10000000) {
        // If the price is 1 crore or more, display it in crores
        return `${(price / 10000000).toFixed(2)} crores`;
      } else if (price >= 100000) {
        // If the price is 1 lakh or more, display it in lakhs
        return `${(price / 100000).toFixed(2)} lakhs`;
      } else {
        // Otherwise, display it in raw numbers
        return price.toString();
      }
    }

    const numericPrices = extractedPrices
      .map(convertLakhOrCroreStringToNumber)
      .filter((price) => price !== null);

    // Calculate the average price
    const averagePrice1 =
      numericPrices.reduce((sum, price) => sum + price, 0) /
      numericPrices.length;
    // Calculate the maximum price
    const maxPrice2 = Math.max(...numericPrices);

    // Calculate the minimum price
    const minPrice3 = Math.min(...numericPrices);

    const averagePrice = formatPriceWithUnits(averagePrice1);
    const maximumPrice = formatPriceWithUnits(maxPrice2);
    const minimumPrice = formatPriceWithUnits(minPrice3);

    console.log("Average" + averagePrice);
    console.log("Maximum" + maximumPrice + "   Minimum" + minimumPrice);

    //Testing here 
    const bhkaddress = await page.evaluate(() => {
      // Select all elements with crayons-tag class
      return [...document.querySelectorAll("[target=_blank]")].map((el) =>
        el.textContent.trim()
      );
    });
// console.log(  " bhk Address Here "+bhkaddress);
const filteredBhkaddress = bhkaddress.filter(line => !line.includes('Explore Nearby') &&   !line.includes('Post Your Property'));

const joinedString = filteredBhkaddress.join(',');

const lines = joinedString.split(',');

// Iterate through the lines and trim any extra whitespace
const trimmedLines = lines.map(line => line.trim());

// Remove empty lines
const nonEmptyLines = trimmedLines.filter(line => line.length > 0);

// Now, nonEmptyLines contains each line as a separate element
console.log(nonEmptyLines);


// End Here


    const bhk = await page.evaluate(() => {
      // Select all elements with crayons-tag class
      return [...document.querySelectorAll("[class=font-semibold]")].map((el) =>
        el.textContent.trim()
      );
    });
    // console.log(bhk);
    const bhkData = bhk.filter(
      (item) =>
        item.includes("1 BHK") ||
        item.includes("2 BHK") ||
        item.includes("3 BHK") ||
        item.includes("4 BHK")
    );

    const uniqueBHK = [...new Set(bhkData)].join(" ").replace(/ /g, "");

    const  prisma = new PrismaClient();

    try {
      // Store data in the database
      const property = await prisma.propertydata.create({
        data: {
          // Other property data...
          averagePrice,
          minimumPrice,
          maximumPrice,
          areaName: "Hinjewadi",
          bhktype: uniqueBHK
    
        },
      });
    
      console.log("Data stored in the database:", property);
    } catch (error) {
      console.error("Error storing data in the database:", error);
    } finally {
      // Close the Prisma client
      await prisma.$disconnect();
    }

    return { data, uniqueBHK };


    
  } finally {
    await browser.close();
  }

  


}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const scrollInterval = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(scrollInterval);
          resolve();
        }
      }, 100);
    });
  });
}




scrapeNoBroker()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
