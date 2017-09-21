import { browser, by, element } from 'protractor';

export class QuotesAng2Page {
  navigateTo(url) {
    return browser.get(url);
  }

  getPageTitle() {
    return element(by.css('app-root h2')).getText();
  }

  getTextOnPage(css) {
    return element(by.css(css)).getText();
  }

  getLastTextOnPage(css) {
    return element.all(by.css(css)).last().getText();
  }

  clickLinkText(text){
    element(by.linkText(text)).click();
  }

  clickButtonText(text){
    element(by.buttonText(text)).click();
  }

  clickLastButton(text){
    element.all(by.buttonText(text)).last().click();
  }

  deleteQuote() {
    element(by.buttonText('Delete')).click();
  }

  getNumOfQuotes() {
    return element.all(by.css('.blockquote')).count();
  }

  signUp() {
    element(by.id('username')).sendKeys("user");
    element(by.id('email')).sendKeys("user@test.com");
    element(by.id('password')).sendKeys("1234test");
    element(by.buttonText('Submit')).click();
  }

  login() {
    element(by.id('email')).sendKeys("user@test.com");
    element(by.id('password')).sendKeys("1234test");
    element(by.buttonText('Submit')).click();
  }

  addQuote() {
    element(by.id('content')).sendKeys('This is a quote.');
    element(by.id('author')).sendKeys('Author');
    element(by.buttonText('Save')).click();
  }
}
