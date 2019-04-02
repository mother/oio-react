context('View', () => {
   it('Renders kitchen sink test as expected', () => {
      cy.viewport(1360, 860)
      cy.visit('/tests/view-kitchen-sink')
      cy.testImageSnapshot('View - Kitchen Sink')
   })
})
