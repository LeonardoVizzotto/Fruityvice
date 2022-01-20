context('Main', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the app correctly', () => {
    cy.matchImageSnapshot();
  });
});
