import { InsuranceAppPage } from './app.po';

describe('insurance-app App', function() {
  let page: InsuranceAppPage;

  beforeEach(() => {
    page = new InsuranceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
