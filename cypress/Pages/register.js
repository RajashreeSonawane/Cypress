class Register {
elements = {
        firstName: () => cy.get("input[placeholder='First Name']"),
        lastName: () => cy.get("input[placeholder='Last Name']"),
        address: () => cy.get(".col-md-8 > .form-control"),
        email: () => cy.get("input[type='email']"),
        phone: () => cy.get("input[type='tel']")
    }
    enterData() {
        this.elements.firstName().type('Rajashree')
        this.elements.lastName().type('Sonawane')
        this.elements.address().type('Pune')
        this.elements.email().type('Raj@gmail.com')
        this.elements.phone().type('9657344065')
    }
}
module.exports = new Register();



