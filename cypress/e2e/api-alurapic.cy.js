describe('API Alurapic', () => {
   
  it('Dados da API', () => {
      cy.request({
        method:'POST',
        url: 'http://localhost:3000/user/login',
        body: Cypress.env()
      }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('id')
        expect(res.body).to.be.equal(4)
      })
  })

  it('Fotos do utilizador', () => {
    cy.request({
      method:'GET',
      url: 'http://localhost:3000/julianasfer/photos/',
      body: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[0]).to.have.property('description')
      expect(res.body[0].description).to.be.equal('hamster 3')
    })
})

})