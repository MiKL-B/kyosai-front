describe('Cart', function () {
    it('Ajouter un produit au panier', function () {
        cy.server()
        cy.route('GET', /shop./, 'fixture:product.json').as('getProduct')
        cy.visit('http://127.0.0.1:8080/')
        cy.get('[data-cy=menu]').click()
        cy.get('[data-cy=register]').click()
        cy.get('[data-cy=toLogin]').click()
        cy.get('[data-cy=email]').type('admin@kyosai.fr')
        cy.get('[data-cy=mdp]').type('admin')
        cy.get('[data-cy=submitLogin]').click()
        cy.get('.swal2-confirm').click({ force: true })
        cy.get('[data-cy=menu]').click()
        cy.get('[data-cy=shop]').click()
        cy.wait('@getProduct')
        cy.get('@getProduct')
        cy.get('[data-cy=addToCart]').click()
        cy.get('.swal2-confirm').click({ force: true })
        cy.get('[data-cy=menu]').click()
        cy.get('[data-cy=cart').click()
      
        
    })
})