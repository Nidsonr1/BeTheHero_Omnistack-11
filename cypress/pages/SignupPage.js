class SignupPage {
  go() {
    cy.visit('http://localhost:3000/register')
    cy.url('match', /register/);
    cy.get('section h1').should('have.text', 'Cadastro');
  };

  fillForm(ong) {
    cy.get('form input[placeholder="Nome da ONG"]').type(ong.name);
    cy.get('form input[placeholder="E-mail"]').type(ong.email);
    cy.get('form input[placeholder="Whatsapp"]').type(ong.whatsapp);
    cy.get('form input[placeholder="Cidade"]').type(ong.city);
    cy.get('form input[placeholder="UF"]').type(ong.uf);
  };

  submit() {
    cy.intercept('POST', 'http://localhost:3333/ongs').as('postSubmit');
    cy.get('form button[type="submit"]').click();
    cy.wait('@postSubmit');
    cy.get('@postSubmit').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200) //Http Code deveria ser 201
      expect(xhr.response.body).has.property('id')
      expect(xhr.response.body.id).is.not.null;
    });
  };
}

export default new SignupPage