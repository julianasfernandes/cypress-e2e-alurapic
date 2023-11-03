
 Cypress.Commands.add('login', (user, password) => { 
    cy.get('[data-test="loginUserName"]').type('juliansfer');
    cy.get('[data-test="loginPassword"]').type('juliana123');
    cy.contains('button', 'login').click();
  })

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })