'use strict';
const addContext = require('mochawesome/addContext');
const config = require('./config');

describe('I visit the Home Page', () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage()
  });

  afterEach(async () => {
    await page.close();
  });

  it('I should see the home page', async function () {
    await page.goto('http://www.kmart.com.au');
    await page.screenshot({path: `${config.screenshotPath}/home_page.png`});
    addContext(this, `${config.screenshotPath}/home_page.png`);
    console.log(await page.title());
  });

});
