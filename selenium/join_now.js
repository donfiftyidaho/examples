/**
This test signs up a new user on the dev server.

To set up the browser:
- delete all cookies and local storage for the Url
- close the browser window
- in the vals object, choose sign up data that is not in the DB
*/

'use strict';

const {Builder, By, Key, until} = require('selenium-webdriver');

const vals = {
	url: 'https://dev7.fiftyflowers.com/',
	fname: 'Buzz201',
	email: 'buzz201@fiftyflowers.com',
	passwd: 'password',
};

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(vals.url);
    await driver.findElement(By.id('mod-sign-in-id')).isDisplayed();
    await driver.findElement(By.id('joinNowUserNameTxt')).sendKeys(vals.fname, Key.TAB);
    await driver.findElement(By.id('signUpEmail')).sendKeys(vals.email, Key.TAB);
    await driver.findElement(By.id('signUpPassword')).sendKeys(vals.passwd);
    await driver.findElement(By.id('opt-out-event-date')).click();
    await driver.findElement(By.id('sign-up-btn')).click();
  } finally {
    await driver.quit();
  }
})();