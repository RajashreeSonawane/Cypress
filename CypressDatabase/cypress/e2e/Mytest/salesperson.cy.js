describe('SQL Database Testing', () => {

xit('Create a Table', function () {
        cy.task('queryDb', "CREATE TABLE Orders (Ord_no decimal(7,0), purch_amt Decimal(6,2), Ord_date date, cust_id char(6),salesman_id char(6),salesperson_name varchar(255),city varchar(255))")
    })
    xit('Insert Entries into the table', function () {
        cy.task('queryDb', `INSERT INTO Orders (Ord_no, purch_amt, Ord_date, cust_id,salesman_id,salesperson_name,city) VALUES
        (70001, 150.5, '2012-09-05',3005,5002,'Rajashree','Pune'),
        (70009, 270.65 ,'2012-09-10', 3001,5005,'Komal','Mumbai'),
        (70002, 65.26, '2012-10-05',3002, 5001,'Sonal','Nashik'),
        (70004, 110.5, '2012-08-17',3009, 5003,'Swati','Paris'),
        (70007, 948.5, '2012-09-10',3005, 5002,'Sachin','Goa'),
        (70005, 2400.6, '2012-07-27',3007, 5001,'Suraj','Delhi'),
        (70008, 5760, '2012-09-10',3002, 5001,'Ram','Nagpur');`).then((result) => {
            expect(result.affectedRows).to.equal(7)
        })

    })

    it('Use database ', function () {
        cy.task('queryDb', `use persontest`)
        .then((result) => { cy.log('========', result);
        })
    })

    it('Find unique salespeople Id', function () {
        cy.task('queryDb', `SELECT DISTINCT salesman_id FROM Orders`)
        .then((result) => { 
            cy.log('========', JSON.stringify(result));
            expect(result.length).to.equal(4)
        })
    })
    it('Find salespeople city Paris', function () {
        cy.task('queryDb', `SELECT * FROM Orders WHERE city='Paris';`)
        .then((result) => { 
            cy.log('========', JSON.stringify(result));
            expect(result.length).to.equal(6)
       
        })
    })
})