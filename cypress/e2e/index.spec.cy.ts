/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Home page tests", () => {
    beforeEach(() => {
        cy.visit('localhost:3001');
    })

    it("Should display the Become a host button", () => {
        cy.get('#navbar').contains('Become a Host').should("be.visible");
    })

    it("Should display the airbnb logo", () => {
        cy.get('#airbnb-logo').should("be.visible");
    })

    it("Should display the correct texts for filter in top nav", () => {
        cy.get('#navbar').contains('Anywhere').should("be.visible");
        cy.get('#navbar').contains('Any week').should("be.visible");
        cy.get('#navbar').contains('Add guests').should("be.visible");
    })

    it("Should display the correct card data", () => {
        cy.get('#listing-card').contains('5 bedroom Duplex in Ajah').should("be.visible");
        cy.get('#listing-card').contains('Hosted by Jason').should("be.visible");
        cy.get('#listing-card').contains('Oct 15 - 20').should("be.visible");
        cy.get('#listing-card').contains('$100 night').should("be.visible");
    })

})