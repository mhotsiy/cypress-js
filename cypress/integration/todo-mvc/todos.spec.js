/// <reference types="cypress" />

describe('Todo Application', () => {
    it('loads the page', () => {
        cy.visit('/')
        cy.get('.new-todo').type('hello world{enter}')
        cy.get('.todo-list li:nth-of-type(1)').should('have.text', 'hello world')
            .should('not.have.class', 'completed')
            .find('.toggle')
            .should('not.be.checked')
        
    })
})