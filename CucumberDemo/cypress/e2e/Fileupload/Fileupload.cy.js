import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/FileUpload.html');
})
When('user select browser and choose file correctly', (datatable) => {
    datatable.hashes().forEach(element=>{
        cy.get('input[type=file]').attachFile(element.File_name)
 })
})


Then('verify file uploaded successfully', () => {
    cy.get('.fileinput-remove-button > span').should('have.text','Remove')
})

