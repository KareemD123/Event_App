describe('event', () => {
  it('loads', () => {
    cy.visit('http://localhost:4200')
  })

  it('displays title', () => {
    cy.visit('http://localhost:4200')
    cy.get('h1').contains('Event List')
  })
})