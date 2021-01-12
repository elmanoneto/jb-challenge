describe("Checkout process", () => {
    it("Buy product", () => {
      cy.visit('/')
      cy.get('#btn-buy').click()
      cy.get('.cart').click()
      cy.get('#pay-btn').click()
      cy.get('.payment__input-card').type('12345')
      cy.get('#form-checkout')

      cy.server()
      cy.route({
          url: 'http://localhost:4000/carts/checkout',
          method: 'POST',
          respone: { code: 200 }
      })

      cy.get('#form-checkout').submit()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Compra realizada com sucesso!')
      })
    });
  });
  