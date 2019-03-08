context('View', () => {
   beforeEach(() => {
      cy.viewport(1360, 860)
   })

   it('Renders kitchen sink test as expected', () => {
      cy.visit('/tests/view-kitchen-sink')
      cy.testImageSnapshot('View - Kitchen Sink')
   })
})
