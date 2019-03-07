context('OIO Provider', () => {
   it('Normalized Styles render as expected', () => {
      cy.viewport(500, 500)
      cy.visit('/tests/oio-provider')
      cy.testImageSnapshot('Normalized Styles')
   })
})
