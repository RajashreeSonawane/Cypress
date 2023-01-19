/// <reference types ="Cypress" />
describe('get api user tests',()=>{
    let accesstoken="5ef0433a5f46b7e202908659bdb602afdc46f1675f8934f85e12e4bdfdac06d1"
    it('get users',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'authorization':"Bearer"+ accesstoken

            }
        }).then((res)=>{
        
            expect(res.status).to.eq(200)

        })
    })
    it('get users by id',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/2474',
            headers:{
                'authorization':"Bearer"+ accesstoken

            }
        }).then((res)=>{
        
            expect(res.status).to.eq(200)
            
            
        })
    })
})