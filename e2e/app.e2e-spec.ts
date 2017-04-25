import { TreeviewAngularTreeComponentPage } from './app.po';

describe('treeview-angular-tree-component App', () => {
  let page: TreeviewAngularTreeComponentPage;

  beforeEach(() => {
    page = new TreeviewAngularTreeComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
