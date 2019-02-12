context('Text', () => {
   beforeEach(() => {
      cy.viewport(500, 500)
   })

   it('Renders at different sizes as expected', () => {
      cy.visit('/tests/text-sizes')
      cy.testImageSnapshot('Text Sizes')
   })

   it('Renders colors as expected', () => {
      cy.visit('/tests/text-color')
      cy.testImageSnapshot('Text Color')
   })

   it('Renders different font-weights as expected', () => {
      cy.visit('/tests/text-weights')
      cy.testImageSnapshot('Text Weights')
   })
})
