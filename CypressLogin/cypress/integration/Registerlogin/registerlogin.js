import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import register from '../Pages/register';

Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/Register.html');
})
When('user enter register data credentials', () => {
    register.enterData();
 })
Then('user should be register successfully', () => {
    register.elements.firstName().should('be.visible')
    register.elements.lastName().should('be.visible')
    register.elements.address().should('be.visible')
    register.elements.email().should('be.visible')
    register.elements.phone().should('be.visible')
    register.elements.submit().should('be.visible')
    
})