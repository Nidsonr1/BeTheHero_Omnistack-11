/// <reference types="cypress" />
import signupFactory from '../factories/SignupFactory';
import signupPage from '../pages/SignupPage';


describe('Signup', () => {
  beforeEach('', () => {
    cy.intercept('POST', 'http://localhost:3333/ongs').as('postSubmit');
   
  })
  it('User should be signup', () => {
    var ong = signupFactory.ong()
    
    signupPage.go();
    signupPage.fillForm(ong);
    signupPage.submit();
  });
});