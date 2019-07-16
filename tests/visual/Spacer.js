context('Spacer', () => {
   beforeEach(() => {
      cy.viewport(300, 150)
   })

   it('Renders in horizontal orientation as expected', () => {
      cy.visit('/tests/spacer-horizontal')
      cy.testImageSnapshot('Spacer Horizontal')
   })

   it('Renders in vertical orientation as expected', () => {
      cy.visit('/tests/spacer-vertical')
      cy.testImageSnapshot('Spacer Vertical')
   })
})
