describe("Check products list", () => {
    it("Check product in list", () => {
      cy.visit('/')
      cy.get('#product').should('have.class', 'list__item')
    });

    it("Can click in product", () => {
        cy.visit('/')
        cy.get('#product-image').click()
        cy.url().should('include', '/products/')
        cy.get('.cart').click()
      });

      it("Add product to cart", () => {
        cy.visit('/')
        cy.get('#btn-buy').click()
        cy.get('.badge').contains('1')
      });
  });
  