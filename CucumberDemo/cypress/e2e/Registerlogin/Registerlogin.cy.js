import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

import register from '../Pages/register';


Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/Register.html');
})
When('user enter register data credentials', (datatable) => {
   datatable.hashes().forEach(element => {
    cy.log(element.phone)
     register.enterData(element.firstName,element.lastName,element.address,element.email,element.phone,element.submit);
     
   })   
 })
 

Then('user should be register successfully', () => {
    register.elements.firstName().should('be.visible')
    register.elements.lastName().should('be.visible')
    register.elements.address().should('be.visible')
    register.elements.email().should('be.visible')
    register.elements.phone().should('be.visible')
    register.elements.submit().should('be.visible')
    
})