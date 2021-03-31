const { ROUTE_PATHS } = require('app/routes');

Cypress.Commands.add('login', () => {
  cy.visit(ROUTE_PATHS.LOGIN);
  cy.get('button[type=submit]').click();
  cy.get('[data-testid="main-page"]').should('be.visible');
});