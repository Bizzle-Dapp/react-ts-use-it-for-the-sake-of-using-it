/// <reference types="cypress" />

describe('my awesome website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('turns page to dark mode', () => {
    cy.get('.Theme-Toggle').check()
  })
  it('turns page to light mode', () => {
    cy.get('.Theme-Toggle').uncheck()
  })

  it('sorts numbers', () => {
    cy.get(':nth-child(9) > .Details-Form-Input').type('10523')
  })
})