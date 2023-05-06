/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    before(() => {
        // runs once before all test cases in this describe block, resembles beforeClass in TestNG
    })
    beforeEach(() => {
        // runs before each test case, resembles BeforeMethod in TestNG
        cy.clearCookies();
    })
    after(() => {
        // similar to AfterClass in TestNG, runs once after all tests finish
    })
    afterEach(() => {
        // similar to AfterMethod in TestNG
    })
    it('Opening a web application', () => {
        cy.visit('/registration_form');
    })
    it('Test 2', () => {
        expect(false).to.equal(false);
    })
    it('Test 3', () => {
        expect(false).not.to.equal(false);
    })
    it('Test 4', () => {
        expect(5).to.equal(5);
    })
    it('Test 5', () => {
        expect(true).to.equal('5' ==5);
    })
}) 
