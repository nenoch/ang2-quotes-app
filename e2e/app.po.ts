import { browser, by, element } from 'protractor';

export class QuotesAng2Page {
  navigateTo(url) {
    return browser.get(url);
  }

  getPageTitle() {
    return element(by.css('app-root h2')).getText();
  }

  clickLinkText(text){
    element(by.linkText(text)).click();
  }

  signUp() {
    element(by.id('username')).sendKeys("mike");
    element(by.id('email')).sendKeys("mike@mike.com");
    element(by.id('password')).sendKeys("mike1234");
    element(by.buttonText('Submit')).click();
  }

  login() {
    element(by.id('email')).sendKeys("mike@mike.com");
    element(by.id('password')).sendKeys("mike1234");
    element(by.buttonText('Submit')).click();
  }
}
