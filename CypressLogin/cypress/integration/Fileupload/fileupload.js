import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/FileUpload.html');
})
When('user select browser and choose file correctly', () => {
    const filepath="Car.jpg"
       cy.wait(5000)
       const fileName= 'Car.jpg'
      cy.fixture('Car.jpg')
     .then(Cypress.Blob.base64StringToBlob)
      .then((fileContent) => {
       cy.get('input[type=file]').attachFile(
      {fileContent, fileName, mimeType: 'image/**'})

})
})

Then('verify file uploaded successfully', () => {
    cy.get('.fileinput-remove-button > span').should('have.text','Remove')
})

