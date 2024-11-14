describe('Main Page Load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('should have a title', () => {
    cy.title().should('include', 'Tea Subscriptions')
  })

  it('should have a header', () => {
    cy.get('h1').should('contain', 'Tea Subscriptions')
  })

  it('should have an image', () => {
    cy.get('img').should('have.attr', 'src')
  })

  it('should have a subscription container', () => {
    cy.get('.subscription-container').should('exist')
  })

  it('should have a subscription header', () => {
    cy.get('.subscription-header').should('exist')
    cy.get('.subscription-header').should('contain', 'Subscriptions')
  })

  it('should have a subscription list', () => {
    cy.get('.subscription-list').should('exist').and('have.length.at.least', 1)
    cy.get('.subscription-list li').should('have.length', 3)
  })

  it('should have a subscription search', () => {
    cy.get('input').should('exist')
    cy.get('input').should('have.attr', 'placeholder', 'Search Subscriptions by Title')
  })
})