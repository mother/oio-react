context.only('Modal', () => {
   it('Renders, opens and closes Modal as expected', () => {
      cy.viewport(720, 500)
      cy.visit('/tests/modal-basic')

      cy.get('#open-modal-button').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Modal - Open')

      cy.get('#close-modal-control').click()
      // Wait for animation to finish
      cy.wait(500)
      cy.testImageSnapshot('Modal - Close')
   })
})
