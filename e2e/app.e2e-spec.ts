import { AngularStarterV2Page } from './app.po';

describe('angular-starter-v2 App', () => {
  let page: AngularStarterV2Page;

  beforeEach(() => {
    page = new AngularStarterV2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to my!!'))
      .then(done, done.fail);
  });
});
