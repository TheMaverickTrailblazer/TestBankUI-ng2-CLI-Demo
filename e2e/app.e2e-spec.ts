import { TMPBankUIPage } from './app.po';

describe('tmpbank-ui App', function() {
  let page: TMPBankUIPage;

  beforeEach(() => {
    page = new TMPBankUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
