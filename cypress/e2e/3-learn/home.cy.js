/// <reference types="cypress" />

describe('my awesome website', () => {

  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    })
  })

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

  it('changes the image to gif of a dog', () => {
    cy.get('[data-testid="Image-Path-Input"]').clear().type("https://i.imgur.com/05UQ84w.gif")
  })

  it('goes to details form page and configures all inputs', () => {
    cy.get('[href="/detailsForm"] > button').click()

    cy.get('#selectOption').select('Option 2')

    cy.get('[data-testid="Age-Form-Input"]').type("{backspace}").type("20")
    cy.get('[data-testid="Name-Form-Input"]').type("Olys6")
    cy.get('[data-testid="Email-Form-Input"]').type("oliver.skjevesland@gmail.com")

    cy.get('[data-testid="Form-Clear-Button"]').click()
  })

  // it('changes select to input 2 from input 1', () => {
    
  // })
})