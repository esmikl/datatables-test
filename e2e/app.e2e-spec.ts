import { DatatablesTestPage } from './app.po';

describe('datatables-test App', () => {
  let page: DatatablesTestPage;

  beforeEach(() => {
    page = new DatatablesTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
