/// <reference types="cypress" />

describe('Find or get Elemnts by using Different locators', () => {
    
    beforeEach(() => {
        // runs before each test case, resembles BeforeMethod in TestNG
        cy.clearCookies();
        cy.visit('login');
    })
    
    it('Check different locators strategies', () => {
    
        // By CSS locator
        cy.get("input[name='username']").type("CydeoStudent") // every statement creates an object to be intearcted, and next command makes operation to the object created at the previous statement
        // attribute name and value 
        cy.get("[type='text']").clear();  // clears what is typed

        cy.get("input").each((item, index, list) => {
            // assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
    })
    
   
}) 