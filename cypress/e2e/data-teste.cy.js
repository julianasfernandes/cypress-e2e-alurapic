describe('Página de registo', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
    })

    const usuarios = require('../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
        it('efetuar registo com sucesso', () => {
            
      
            cy.get('[data-test="register"]').click()
            cy.get('[data-test="email"]').type(usuario.email)
            cy.get('[data-test="fullName"]').type(usuario.fullName)
            cy.get('[data-test="registerUserName"]').type(usuario.registerUserName)
            cy.get('[data-test="registerPassword"]').type(usuario.registerPassword)
            cy.get('[data-test="btnRegister"]').click()
        })
    })
   
})