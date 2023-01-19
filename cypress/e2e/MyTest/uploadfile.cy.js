
describe('File upload', () => {
    it('passes', () => {
      cy.visit('https://demo.automationtesting.in/FileUpload.html')
      const filepath="Car.jpg"
       cy.wait(5000)
       const fileName= 'Car.jpg'
      cy.fixture('Car.jpg')
     .then(Cypress.Blob.base64StringToBlob)
      .then((fileContent) => {
       cy.get('input[type=file]').attachFile(
      {fileContent, fileName, mimeType: 'image/**'})
      cy.get('.fileinput-remove-button > span').should('have.text','Remove')
    })
  })
  })
  