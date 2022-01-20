context('Basket', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the basket with the correct number of items', () => {
    cy.get('[data-test-id="toolbar-test-id"]').matchImageSnapshot(
      'empty-basket'
    );

    cy.get('[data-test-id="card-grid-test-id"]')
      .children()
      .eq(0)
      .children()
      .eq(7)
      .click();

    cy.get('[data-test-id="toolbar-test-id"]').matchImageSnapshot(
      'basket-1-item'
    );

    cy.get('[data-test-id="card-grid-test-id"]')
      .children()
      .eq(1)
      .children()
      .eq(7)
      .click();

    cy.get('[data-test-id="toolbar-test-id"]').matchImageSnapshot(
      'basket-2-item'
    );
  });

  it('should open empty basket', () => {
    cy.get('[data-test-id="basket-test-id"]').click();
    cy.matchImageSnapshot();
  });

  it('should open filled basket', () => {
    cy.get('[data-test-id="card-grid-test-id"]')
      .children()
      .eq(0)
      .children()
      .eq(7)
      .click();

    cy.get('[data-test-id="card-grid-test-id"]')
      .children()
      .eq(1)
      .children()
      .eq(7)
      .click();

    cy.get('[data-test-id="basket-test-id"]').click();
    cy.matchImageSnapshot();
  });
});
