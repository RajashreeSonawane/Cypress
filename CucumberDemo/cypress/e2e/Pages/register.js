class Register {
    elements = {
           firstName: () => cy.get("input[placeholder='First Name']"),
           lastName: () => cy.get("input[placeholder='Last Name']"),
           address: () => cy.get(".col-md-8 > .form-control"),
           email: () => cy.get("input[type='email']"),
           phone: () => cy.get("input[type='tel']"),
           submit:() =>cy.get("#submitbtn")
       }
       enterData(firstName,lastName,address,email,phone) {
           this.elements.firstName().type(firstName)
           this.elements.lastName().type(lastName)
           this.elements.address().type(address)
           this.elements.email().type(email)
           this.elements.phone().type(phone)
           this.elements.submit().click()
          
       }
      
   }
   module.exports = new Register();
   