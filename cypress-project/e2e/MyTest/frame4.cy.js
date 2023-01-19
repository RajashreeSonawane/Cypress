/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('Handling Frame', () => {
    before(() => {

        cy.visit('https://demo.automationtesting.in/Frames.html');

    })

    it('within in iFrame', () => {
        //cy.get('.analystic[href="#Multiple"]').click()
       cy.xpath('//a[normalize-space()="Iframe with in an Iframe"]').click()
        const outerframe=cy.iframe('#Multiple > iframe')
        cy.frameLoaded('#Multiple > iframe')
        const cyframe1=cy.get(outerframe)
        const innerframe=cy.iframe('iframe[src="SingleFrame.html"]')
        cy.frameLoaded('iframe[src="SingleFrame.html"]')
         const cyIframe2 = cy.get(innerframe);
        // const frame=cy.get(cyframe1,cyIframe2)
         cyIframe1.find('input[type=text]').type('Coucou'); 
        //cy.get('input[type=text]').type('Rajashree')
       // cy.get('.analystic[href="#Multiple"]').click()
       /* cy.xpath('//a[normalize-space()="Iframe with in an Iframe"]').click()
        cy.getIframeBody('#Multiple > iframe')
        .then(iframe1 => {   
            let iframe2 = iframe1.find('iframe[src="SingleFrame.html"]')[0]   //Do stuff with queryselector()   
            console.log(iframe2);
            let iframe3 = iframe2.contentWindow.document.querySelector('iframe[src="SingleFrame.html"]');
            console.log('iframe3', iframe3) // This is set to an iframe
            console.log(iframe3.contentWindow) //This is null
            //debugger

            /*let cyIframe3 = Cypress.$(iframe3.contentWindow.document);
            console.log('cy iframe3', cyIframe3);
*/            
           // let cyIframe32 = cy.get(iframe3);
           // console.log('cy iframe32', cyIframe32); //This is: $Chainer {userInvocationStack: "    at Context.eval (http://localhost:8090/__cypress/tests?p=cypress\support\index.js:237:25)", specWindow: Window, chainerId: "chainer1656", firstCall: false, useInitialStack: false}

            /*let field = iframe3.contentWindow.document.querySelector('#m$c$f$Title$txtText'); // Exception because iframe3.contentWindow is null
            console.log(field);
*/
           // iframe3.find('input[type=text]').type('Coucou'); //fin is not a function
        });
})
        
    
    






