/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    
    beforeEach(() => {
        // runs before each test case, resembles BeforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })
    
    it('Check Different Button Actions', () => {
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');

        // find element with class attribute and create a list, then select 3rd element from the list
        cy.get('.btn.btn-primary').then(($buttons) => {
            cy.wrap($buttons).eq(2).click();
            // assert the text
            cy.contains('Clicked on button three!').should('be.visible');
        })
    })


    
}) 