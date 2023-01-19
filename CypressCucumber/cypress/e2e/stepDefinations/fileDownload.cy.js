
//import { Given, When, Then } from 'cypress-cucumber-preprocessor';


Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/FileDownload.html');
})
When('enter data and click generate file button', () => {
    cy.get('#textbox').type('This is cypress training')
    cy.get('#createTxt').should('be.visible')
    cy.get('#createTxt').click()
    cy.get('#link-to-download').should('be.visible')
    cy.get('#link-to-download').click()

})

Then('Verify downloaded file', () => {
    cy.readFile('C:\\Users\\rajashrees\\Downloads\\info.txt')
        .should('exist')
})