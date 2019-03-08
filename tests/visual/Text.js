context('Text', () => {
   before(() => {
      cy.viewport(500, 500)
   })

   it('Renders at different text sizes as expected', () => {
      cy.visit('/tests/text-sizes')
      cy.testImageSnapshot('Text Sizes')
   })

   it('Renders text colors as expected', () => {
      cy.visit('/tests/text-colors')
      cy.testImageSnapshot('Text Colors')
   })

   it('Renders different font-weights as expected', () => {
      cy.visit('/tests/text-weights')
      cy.testImageSnapshot('Text Weights')
   })
})
