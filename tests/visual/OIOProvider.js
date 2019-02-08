const env = Cypress.env()

context('OIO Provider', () => {
   it('Normalized Styles render correctly', () => {
      cy.viewport(600, 600)
      cy.visit('/tests/oio-provider')

      if (env.name === 'headless') {
         cy.matchImageSnapshot('Normalized Styles')
      }
   })
})
