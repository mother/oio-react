context.only('NotificationManager', () => {
   it('Metamorphisises between components as expected', () => {
      cy.viewport(1280, 800)
      cy.visit('/tests/oio-transformer')

      cy.get('#dialog-open-button').click()

      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('OIO Transformer - Popover')

      cy.viewport(400, 800)
      cy.wait(500)
      cy.testImageSnapshot('OIO Transformer - Modal')
   })
})
