class LogonPage {
  go() {
    cy.visit('http://localhost:3000');
    cy.get('.logon-container form h1').should('have.text', 'Faça seu logon');
  }

  fillForm() {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3333/ongs',
      body: {
        name: 'Apac',
        email: 'apac@contato.com',
        whatsapp: '88981254637',
        city: 'Juazeiro do Norte',
        uf: 'CE'
      }
    }).then((response) => {
      cy.get('form input[placeholder="Sua ID"]').type(response.body.id);
    });
  }

  submit() {
    cy.get('form button[type="submit"]').click()
  }

  validAccess() {
    cy.get('h1').should('have.text', `Casos Cadastrados`)
  }
}

export default new LogonPage