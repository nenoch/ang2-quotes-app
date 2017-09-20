import { QuotesAng2Page } from './app.po';
import { browser } from 'protractor';

describe('quotes-ang2 App', () => {
  let page: QuotesAng2Page;

  beforeEach(() => {
    page = new QuotesAng2Page();
  });

  afterAll(() => {

  });

  it('should display welcome title', () => {
    page.navigateTo('/');
    expect(page.getPageTitle()).toEqual('Welcome');
  });

  it('should allow a user to sign up and log in', () => {
    page.navigateTo('/');
    page.clickLinkText('Account');
    page.clickLinkText('Sign up');
    page.signUp();
    page.clickLinkText('Log in');
    page.login();
    expect(page.getPageTitle()).toEqual('Welcome');
  });
});
