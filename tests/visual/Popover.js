context.only('Popover', () => {
   it('Renders, opens and closes Popover as expected', () => {
      cy.viewport(500, 250)
      cy.visit('/tests/popover-basic')

      cy.get('#open-popover-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Popover - Open')

      cy.get('#open-popover-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Popover - Close')
   })
})
