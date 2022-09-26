/// <reference types="cypress" />

describe('As a user,  I should be able to fill in all inputs with my own user', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('[href="/detailsForm"] > button').click()
        cy.get(':nth-child(5) > :nth-child(1)').contains("Some Select Box")
    })

    it('Changes select to option 2 from option 1', () => {
        cy.get('#selectOption').select('Option 2').should("have.value", 'Option 2')
    })

    it('Fills all text inputs and clears them', () => {

        cy.get('[data-testid="Age-Form-Input"]').type("{backspace}").type("20").should("have.value", "20")
        cy.get('[data-testid="Name-Form-Input"]').type("Olys6").should("have.value", "Olys6")
        cy.get('[data-testid="Email-Form-Input"]').type("oliver.skjevesland@gmail.com").should("have.value", "oliver.skjevesland@gmail.com")

        cy.get('[data-testid="Form-Clear-Button"]').click()
        cy.get('[data-testid="Name-Form-Input"]').should("have.value", "")
        cy.get('[data-testid="Email-Form-Input"]').should("have.value", "")
    })

})