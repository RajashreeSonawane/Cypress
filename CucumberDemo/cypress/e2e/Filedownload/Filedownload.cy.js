import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/FileDownload.html');
})
When('enter data and click generate file button', (datatable) => {
  datatable.hashes().forEach(element=>{
    
    cy.log(element.download_file)
    cy.get('#textbox').type('This is cypress training',{timeout:20})
    cy.get('#createTxt').click({force:true})
    cy.get('#link-to-download').click()
       
})
})
Then('verify file downloaded successfully', ()=>{
  cy.readFile('cypress\\downloads\\info.txt').should('contain', 'This is cypress training')
})


