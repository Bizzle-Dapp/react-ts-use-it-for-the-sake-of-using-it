/// <reference types="cypress" />

describe('As a user, I should be able to toggle light and dark mode themes', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('turns page to dark mode', () => {
    cy.get('.Theme-Toggle').check()
  })

  // it('turns page to light mode', () => {
  //   cy.get('.Theme-Toggle').uncheck()
  // })

  it('checks that page header is correct', () => {
    cy.get('code').contains("React TS Use It For The Sake Of Using It")
  })
})