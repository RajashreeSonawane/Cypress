import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given('user navigate to automation website', () => {
    cy.visit('https://demo.automationtesting.in/FileDownload.html');
})
When('enter data and click generate file button', () => {
    cy.get('#textbox').type('This is cypress training',{timeout:20})
    //cy.xpath("//button[@id='createTxt']").click()
    cy.get('#createTxt').click()
    cy.wait(5000)
    cy.get('#link-to-download').click()
    
    
      //cy.get('#createTxt').should('be.visible')
      //cy.get('#createTxt').click({force:true})
      //cy.wait(10000)
      //cy.get('#link-to-download')
      //.scrollIntoView()
      //.should('be.visible')
       //cy.get('#link-to-download').click({forec:true})
       //cy.downloadFile('downloads','cypress-example.doc')

})

Then('verify file downloaded successfully', () => {
    cy.readFile("//downloads//cypress-example.doc").should('contain', 'This is cypress training')
})