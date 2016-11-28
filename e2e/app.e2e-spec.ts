import { CodeChallengeAppPage } from './app.po';

describe('code-challenge-app App', function() {
  let page: CodeChallengeAppPage;

  beforeEach(() => {
    page = new CodeChallengeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
