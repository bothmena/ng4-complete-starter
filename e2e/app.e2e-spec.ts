import { Ng4StarterPage } from './app.po';

describe('ng4-starter App', () => {
  let page: Ng4StarterPage;

  beforeEach(() => {
    page = new Ng4StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
