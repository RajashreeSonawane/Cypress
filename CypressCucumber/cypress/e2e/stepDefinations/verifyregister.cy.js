
//import { Given, When, Then } from 'cypress-cucumber-preprocessor';
import register from "../../Pages/register";

Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/Register.html');
})
When('user enter register data credentials', () => {
    register.enterData();
    register.elements.firstName().should('be.visible')
    register.elements.lastName().should('be.visible')
    register.elements.address().should('be.visible')
    register.elements.email().should('be.visible')
    register.elements.phone().should('be.visible')

})

Then('user should be register', () => {
    register.elements.submit().should('be.visible')

})