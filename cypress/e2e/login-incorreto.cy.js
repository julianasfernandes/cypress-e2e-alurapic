describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
   
        cy.intercept('POST', 'http://localhost:3000/user/login', {
           statusCode: 400
        }).as('stubPost')
    })
    
    it('verificar mensagens de campos obrigratórios', () => {
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')
    })

    
    it('Deve falhar mesmo que os campos sejam preenchido corretamente', () => {
        cy.login('julianasfer', 'juliana123');
        cy.wait('@stubPost');
      })
})