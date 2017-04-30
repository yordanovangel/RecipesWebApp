import { RecipesWebAppPage } from './app.po';

describe('recipes-web-app App', () => {
  let page: RecipesWebAppPage;

  beforeEach(() => {
    page = new RecipesWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
