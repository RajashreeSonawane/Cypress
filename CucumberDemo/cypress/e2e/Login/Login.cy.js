import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
Given('User is at the login page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username {string}', (username) => {
  cy.get('input[name="username"]').type(username)
  cy.log('username')
  
})
When('User enters password {string}', (password) => {
  cy.get('input[name="password"]').type(password)
  cy.log('password')
})
Then('User is able to successfully login to the Website', () => {
  cy.get('button[type="submit"]').click()
  cy.title().should('include', 'OrangeHRM')
})