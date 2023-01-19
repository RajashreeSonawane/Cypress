const availablefixtures = [
    {
        "name": "onefixture",
        "context": "1"
    },
    {
        "name": "twofixture",
        "context": "2"
    },
    {
        "name": "threefixture",
        "context": "3"
    }
]

describe('Automation Test Suite - Fixtures', function () {
    //loop through all the fixtres 
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
            it('enter register details', () => {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                    cy.log(JSON.stringify(this.data))
                    cy.visit('https://demo.automationtesting.in/Register.html');
                    cy.log(JSON.stringify(this.data))
                    cy.get("input[placeholder='First Name']").type(this.data.firstName);
                    cy.get("input[placeholder='First Name']").should('be.visible')

                    cy.get("input[placeholder='Last Name']").type(this.data.lastName);
                    cy.get("input[placeholder='Last Name']").should('be.visible')

                    cy.get('.col-md-8 > .form-control').type(this.data.address);
                    cy.get('.col-md-8 > .form-control').should('be.visible')

                    cy.get("input[type='email']").type(this.data.email);
                    cy.get("input[type='email']").should('be.visible')

                    cy.get("input[type='tel']").type(this.data.phone);
                    cy.get("input[type='tel']").should('be.visible')

                })
                })
        })

    })
})
