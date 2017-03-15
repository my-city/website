import { MycitywebPage } from './app.po';

describe('mycityweb App', () => {
  let page: MycitywebPage;

  beforeEach(() => {
    page = new MycitywebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
