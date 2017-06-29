import { TrainerPage } from './app.po';

describe('trainer App', () => {
  let page: TrainerPage;

  beforeEach(() => {
    page = new TrainerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
