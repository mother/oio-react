context('Form', () => {
   beforeEach(() => {
      cy.viewport(500, 500)
   })

   it('Renders with outline appearance as expected', () => {
      cy.visit('/tests/form-outline')
      cy.testImageSnapshot('Form - Outline Appearance')
   })

   it('Renders with plain appearance as expected', () => {
      cy.visit('/tests/form-plain')
      cy.testImageSnapshot('Form - Plain Appearance')
   })

   it('Renders input at different sizes as expected', () => {
      cy.visit('/tests/form-input-sizes')
      cy.testImageSnapshot('Input - Sizes')
   })

   it('Renders input with underline appearance as expected', () => {
      cy.visit('/tests/form-input-underline')
      cy.testImageSnapshot('Input - Underline Appearance')
   })
})
