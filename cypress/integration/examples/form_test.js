describe('FOrm - testing our form inputs', function() {

    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })


    it("add test to inputs and submit form", function () {
        cy.get('[data-cy="name"]')
        .type("David")
        .should('have.value', "David")

        cy.get('[data-cy="sizeSelect"]').select('Medium')

       cy.get('[type="checkbox"]').check().should('be.checked')

       cy.get('[data-cy="orderNotes"]')
       .type("Please Leave at door")
       .should('have.value', "Please Leave at door")

       cy.get('[data-cy="submit"').click();


    });
});