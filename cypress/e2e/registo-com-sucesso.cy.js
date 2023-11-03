import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de registo', () => {
  it('efetuar registo com sucesso', () => {
    Cadastro.acessarPaginaDeCadastro()
    Cadastro.preencherFormulario()
    Cadastro.submeterCadastro()
  })
})