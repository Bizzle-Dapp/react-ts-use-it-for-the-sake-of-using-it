/// <reference types="cypress" />

describe('As a user, I should be able to toggle light and dark mode themes', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('turns page to dark mode', () => {
    cy.get('.Theme-Toggle').check()
    cy.get('.App').should("have.css", "background-color", "rgb(40, 44, 52)")
  })
})