import { AngularpractisePage } from './app.po';

describe('angularpractise App', function() {
  let page: AngularpractisePage;

  beforeEach(() => {
    page = new AngularpractisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
