context.only('Popover', () => {
   it('Renders, opens and closes Popover as expected', () => {
      cy.viewport(500, 180)
      cy.visit('/tests/popover-basic')

      cy.get('#open-popover-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Popover - Open (left top)')

      cy.get('#open-popover-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Popover - Close')

      // Set anchorOriginHorizontal to right and anchorOriginVertical to bottom
      cy.get('#origin-horizontal-select').select('right')
      cy.get('#origin-vertical-select').select('bottom')
      cy.get('#open-popover-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Popover - Open (right bottom)')
   })
})
