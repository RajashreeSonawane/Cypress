describe('Accessing Fixture', function () {

  before(function () {

    cy.visit('https://demo.automationtesting.in/Register.html');

    cy.fixture('data').then(function (data) {

      this.data = data

    })
  })

  it('Cypress Fixtures TestCases', function () {
    cy.wrap([1, 2, 3]).each((num, i, array) => {
      return new Cypress.Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, num * 100)
      })
    })

    cy.get("input[placeholder='First Name']").type(this.data.firstName);
    

    cy.get("input[placeholder='Last Name']").type(this.data.lastName);

    cy.get('.col-md-8 > .form-control').type(this.data.address);

    cy.get("input[type='email']").type(this.data.email);

    cy.get("input[type='tel']").type(this.data.phone);
    

  })
})
