context('ZoomProvider', () => {
   before(() => {
      cy.visit('/tests/zoom-provider')
   })

   it('Renders correctly at zoom value of 1 and 0.5', () => {
      cy.viewport(480, 600)
      cy.testImageSnapshot('ZoomProvider')
   })
})
