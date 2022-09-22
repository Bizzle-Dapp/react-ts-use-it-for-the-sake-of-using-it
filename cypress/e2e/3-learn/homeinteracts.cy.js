describe('As a user, I should be able to interact with all interactables in the home page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('checks that page header is correct', () => {
        cy.get('code').contains("React TS Use It For The Sake Of Using It")
    })

    it('changes the image to gif of a dog', () => {
        cy.get('[data-testid="Image-Path-Input"]').clear().type("https://i.imgur.com/05UQ84w.gif")
    })

    it('Makes sure the number sort properly in ascending order', () => {
        cy.get(':nth-child(9) > .Details-Form-Input').type("1,4,2,5")
        cy.get(':nth-child(15) > .Details-Form-Input').should("have.value", "1, 2, 4, 5")
    })

    it('Makes sure the number sort properly in descending order', () => {
        cy.get(':nth-child(9) > .Details-Form-Input').type("1,4,2,5")
        cy.get(':nth-child(7) > :nth-child(12)').click()
        cy.get(':nth-child(15) > .Details-Form-Input').should("have.value", "5, 4, 2, 1")
    })

})