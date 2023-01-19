describe('Progress Bar', () => {



  before(() => {

    cy.visit('https://demo.automationtesting.in/JqueryProgressBar.html');

  })
  it('tests the download buttons', () => {
    cy.get('#downloadButton').click()
    let status = () => {
      cy.get('div.progress-label').then(option => {
        if (option.get(0).textContent === 'Complete!') {
          cy.get('div.progress-label').should('have.text', 'Complete!')
          return
        }
        else {
          cy.wait(10);
          status()
        }
      })
    }
    status()
  })
})