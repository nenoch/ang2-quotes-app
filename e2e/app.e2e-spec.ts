import { QuotesAng2Page } from './app.po';

describe('quotes-ang2 App', () => {
  let page: QuotesAng2Page;

  beforeEach(() => {
    page = new QuotesAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
