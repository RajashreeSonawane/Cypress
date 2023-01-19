describe('Canvas',()=>{
  context('iPad-mini resolution', () => {
      before(() => {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        //cy.viewport('iPad-mini')
        cy.visit('https://kitchen.applitools.com/ingredients/canvas');

      })
   it('can click on button canvas',()=>
{
    //cy.get('#burger_canvas').trigger(MouseEvent.)
    //cy.get('#burger_canvas').click('top')
    //cy.get('#burger_canvas').click('bottomRight')
    //cy.get('#burger_canvas').click(1920,1080)
    cy.get('#burger_canvas')

  .click(650,500)
  cy.wait(5000)
  cy.get("h1.chakra-heading.css-1vyua5b").should('have.text','Canvas')
/*canvas.addEventListner('mousemove', (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
          });*/
        

 })
 it('reset',()=>
 {
    cy.get('#burger_canvas')
    .click(650,500)
    cy.get("h1.chakra-heading.css-1vyua5b").should('have.text','Canvas')
 })
 })

})





    