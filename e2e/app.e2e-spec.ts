import { QuotesAng2Page } from './app.po';
import { browser } from 'protractor';

describe('quotes-ang2 App', () => {
  let page: QuotesAng2Page;

  beforeEach(() => {
    page = new QuotesAng2Page();
  });

  it('should display welcome title', () => {
    page.navigateTo('/');
    expect(page.getPageTitle()).toEqual('Welcome');
  });

  it('allows a user to sign up and log in', () => {
    page.navigateTo('/');
    page.clickLinkText('Account');
    page.clickLinkText('Sign up');
    page.signUp();
    page.clickLinkText('Log in');
    page.login();
    expect(page.getPageTitle()).toEqual('Welcome');
  });

  it('allows users to add new quotes', () => {
    page.navigateTo('/quotes');
    page.addQuote();
    expect(page.getLastTextOnPage('.quote-content')).toBe('This is a quote.');
  });

  it('allows a user to log out', () => {
    page.navigateTo('/');
    page.clickLinkText('Account');
    page.clickButtonText('Log out');
    expect(page.getTextOnPage('.nav.nav-tabs')).toBeTruthy();
  });

  it('allows anyone to up or downvote a quote', () => {
    page.navigateTo('/quotes');
    page.clickLastButton('+1');
    expect(page.getLastTextOnPage('strong')).toBe('1');
    page.clickLastButton('-1');
    expect(page.getLastTextOnPage('strong')).toBe('0');
  });

  it('allows the logged-in owner of a quote to delete it', () => {
    page.navigateTo('/authentication/login');
    page.login();
    browser.sleep(1000);
    page.navigateTo('/quotes');
    expect(page.getLastTextOnPage('.quote-content')).toBe('This is a quote.');
    page.clickLastButton('Delete');
    expect(page.getLastTextOnPage('.quote-content')).not.toBe('This is a quote.');
  });
});
