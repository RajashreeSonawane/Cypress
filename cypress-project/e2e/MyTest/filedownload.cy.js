
describe('file download', () => {
    it('passes', () => {
      cy.visit('http://demo.automationtesting.in/FileDownload.html')
      cy.get('#textbox').type('This is cypress training')
    
      cy.get('#createTxt').should('be.visible')
      cy.get('#createTxt').click()
      cy.get('#link-to-download').should('be.visible')
    cy.get('#link-to-download').click()
    })
    it('Verify the downloaded file', () => {
        cy.readFile('C:\\Users\\rajashrees\\Downloads\\info.txt')
          .should('exist')
  })
})
  
  