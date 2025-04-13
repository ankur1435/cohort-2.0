/// <reference types="cypress" />

describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://exploratory-planet-analysis.vercel.app')
  })

  it('is able to log in', () => {
    cy.contains('Sign In').should('exist')
    cy.contains('Sign In').click()
    cy.contains('Sign In').should('exist', { timeout: 10000 })
    cy.get('#email').type('rohitpithani13@gmail.com');

    // Fill in the password field
    cy.get('#password').type('Rohit@026')

    cy.get('button').eq(0).click()

    cy.contains('ExoHabit').should("exist", { timeout: 10000 })
  })
})
