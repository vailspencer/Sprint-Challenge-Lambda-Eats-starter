describe("Test our inputs and submit our form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3001");
    })

    it("Test to inputs and submit form", function(){
        cy.get("#pizzaNav").click();

        cy.get('input[name="name"]')
        .type("Generic Name")
        .should("have.value", "Generic Name")
        cy.get('#size')
        .select("Small")
        .should("have.value", "Small")
        cy.get('[type="radio"]').first().check()
        cy.get('#topping1').check();
        cy.get("#SpecialInstructions")
        .type("Make it pizza")

        cy.get('#orderButton').click();
    })
});