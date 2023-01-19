
for (let i = 0; i  < 3; i ++) {
describe('Accessing fixture data',() => {
it('enter details', () => { 
        //Fixture loads the testdata setup in fixtures folder , so setup testdata required before executing test script   

        cy.visit('https://demo.automationtesting.in/Register.html');

        cy.fixture('data').then(data  => {

            const firstName = data[i].firstName
            const lastName = data[i].lastName
            const address = data[i].address
            const email = data[i].email
            const phone= data[i].phone
             
             
            cy.xpath("//input[@placeholder='First Name']").type(firstName);
            cy.xpath('//input[@placeholder="First Name"]').should('be.visible')
            cy.get("input[placeholder='Last Name']").type(lastName);
            cy.get("input[placeholder='Last Name']").should('be.visible')
        
            cy.get('.col-md-8 > .form-control').type(address);
            cy.get('.col-md-8 > .form-control').should('be.visible')
        
            cy.get("input[type='email']").type(email);
            cy.get("input[type='email']").should('be.visible')
        
            cy.get("input[type='tel']").type(phone);
            cy.get("input[type='tel']").should('be.visible')
    
        })
    })
})
}




