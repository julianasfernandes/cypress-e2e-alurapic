const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200/#/home')
        cy.contains('a','Register now').click()
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('juliana@email.com.br')
        cy.get('[data-test="fullName"]').type('Juliana Fernandes')
        cy.get('[data-test="registerUserName"]').type('julianasfer')
        cy.get('[data-test="registerPassword"]').type('juliana123')
    }

    submeterCadastro(){
        cy.contains('button','Register').click()
    }
}

export default new Cadastro();