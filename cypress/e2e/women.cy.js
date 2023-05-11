describe('Agregando un Articulo al carrito,seccion Women', () => {

  beforeEach(() => {

    cy.visit('http://automationpractice.pl/index.php')
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.pl/index.php?id_category=3&controller=category"]').click()
  
  })
  
  it('CART-03: Agregando un articulo con stock', () => {

    cy.get('.top-pagination-content > .compare-form').scrollIntoView()
    cy.get('.last-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    cy.wait(500)
    
    cy.contains('Product successfully added to your shopping cart').should('be.visible')
    cy.contains('There is 1 item in your cart.').should('be.visible')
  })


  it('CART-11:El boton de un articulo SIN stock, debe estar deshabilitado', () => {

    cy.get('.top-pagination-content > .compare-form').scrollIntoView()
    cy.get(':nth-child(1) > .product-container > .right-block > .button-container > span').should('have.class','disabled')
  })
})