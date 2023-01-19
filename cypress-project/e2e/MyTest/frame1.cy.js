/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('Handling Frame', () => {
  before(() => {
    
    cy.visit('https://demo.automationtesting.in/Frames.html');

  })
    it('Single iFrame', () => {
      
        cy.get('#singleframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find('input[type="text"]').type("Rajashree")
        })
       }) 
       it('within in iFrame', () => {
         cy.get('.analystic[href="#Multiple"]').click()
        cy.get('#Multiple > iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find('input[type="text"]').type()
        })
       }) 
    })
    
  

  
  