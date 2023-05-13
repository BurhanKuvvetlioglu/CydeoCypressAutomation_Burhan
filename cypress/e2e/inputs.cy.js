/// <reference types="cypress" />

describe('Input Forms Tests', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it.skip('Check different input box fields and verify', () => {
    // fill the form for username and other info
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Brown');
    cy.get('input[name="username"]').type('CrazyHeart');
    /**
     * Math.random(): creates a number between 0 - 1 ~ 0.005678
     * Math.floor : makes it a whole number
     *  */
    const email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);
    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);
    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`; // 4-digit extension
    cy.get('input[name="phone"]').type(phoneNumber);
    cy.get('input[name="birthday"]').type('01/01/1999');
  });
  it('Check different radio button actions', () => {
    cy.get('.radio')
    .find('[type=radio]')
    .then((radio => {
        // get all radio buttons, select the first one and verify that it is checked
    cy.wrap(radio).first().check().should('be.checked'); // cypress works in a chainable functions structure
    /**
     * radio : is a Jquerry element, 
     * cy.wrap(radio) : turns it into Cypress Object so that I can use Cypress functions
     * first() : selects the first element
     * check() : checks it out
     * should(): verifies whatever I provide as parameter 'be.checked'
     */
    }))
  })
});
