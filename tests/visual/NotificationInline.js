context('NotificationInline', () => {
   it('Renders different types as expected', () => {
      cy.viewport(500, 270)
      cy.visit('/tests/notification-inline-types')
      cy.testImageSnapshot('NotificationInline - Types')
   })

   it('Renders with customizations as expected', () => {
      cy.viewport(500, 400)
      cy.visit('/tests/notification-inline-customized')
      cy.testImageSnapshot('NotificationInline - Customized')
   })
})
