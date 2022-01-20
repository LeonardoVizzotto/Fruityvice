context('Pagination', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate through the pages', () => {
    cy.matchImageSnapshot('first-page');

    cy.get('[data-test-id="pagination-test-id"]').children().eq(2).click();

    cy.matchImageSnapshot('second-page');
  });
});
