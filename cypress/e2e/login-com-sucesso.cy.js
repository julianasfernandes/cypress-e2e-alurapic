describe('Página de login', () => {

    beforeEach(() => {
     cy.visit('http://localhost:4200/#/home')
    })

    it('Efetuar login com sucesso', () => {
      cy.login('user', 'password');
    })
})