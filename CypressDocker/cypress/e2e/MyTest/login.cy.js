describe('free crm app',()=>{
    it('login test',()=>{
        cy.visit('https://classic.crmpro.com/')
        //cy.title().should('have','Free CRM  - CRM software for customer relationship management, sales, and support')
        cy.get('input[name="username"]').type("batchautomation");
        cy.get('input[name="password"]').type("Test@1234");
        cy.get('input[value="Login"]').click();
        //cy.title().should('have','CRMPRO');
        

    })
})