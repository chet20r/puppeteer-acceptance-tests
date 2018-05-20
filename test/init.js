'use strict';

const puppeteer = require('puppeteer');
const {expect} = require('chai');
const _ = require('lodash');

// save the global variables for browser and expect so that
// we reset it after running all tests
const globalVars = _.pick(global, ['browser', 'expect']);

// puppeteer options
const opts = {
  slowMo: 100,
  timeout: 10000
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

after(async () => {
  await browser.close();
  //reset global variables
  global.browser = globalVars.browser;
  global.expect = globalVars.expect;
});
