'use strict';

const {Builder, By, Key, until} = require('selenium-webdriver');

const vals = {
	url: 'https://dev7.fiftyflowers.com/',
	email: 'buzz201@fiftyflowers.com',
	passwd: 'password',
};

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(vals.url);
    await driver.findElement(By.id('mod-sign-in-id')).isDisplayed();
    await driver.findElement(By.id('sign-in-link-id')).click();
    await driver.findElement(By.id('signInEmail')).sendKeys(vals.email, Key.TAB);
    await driver.findElement(By.id('signInPassword')).sendKeys(vals.passwd);
    await driver.findElement(By.className('sign-in-btn')).click();
  } finally {
    await driver.quit();
  }
})();