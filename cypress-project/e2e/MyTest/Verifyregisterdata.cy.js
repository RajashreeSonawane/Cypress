import register from "../../Pages/register";
it('verify entering data', () => {
cy.visit('https://demo.automationtesting.in/Register.html')
register.enterData();
register.elements.firstName().should('be.visible')
register.elements.lastName().should('be.visible')
register.elements.address().should('be.visible')
register.elements.email().should('be.visible')
register.elements.phone().should('be.visible')
})