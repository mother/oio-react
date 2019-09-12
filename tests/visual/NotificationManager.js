context.only('NotificationManager', () => {
   it('Shows notification as expected', () => {
      cy.viewport(600, 300)
      cy.visit('/tests/notification-manager')

      cy.get('#show-notification-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Notification Manager - showNotification')
   })
})
