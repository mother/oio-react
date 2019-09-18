context('Button', () => {
   beforeEach(() => {
      cy.viewport(500, 500)
   })

   it('Renders Button at different sizes as expected', () => {
      cy.visit('/tests/button-sizes')
      cy.testImageSnapshot('Button Sizes')
   })

   it('Renders Button with links as expected', () => {
      cy.visit('/tests/button-link')
      cy.testImageSnapshot('Button Link')
   })

   it('Renders Button with children as expected', () => {
      cy.visit('/tests/button-children')
      cy.testImageSnapshot('Button Children')
   })

   it('Renders different Button customizations and style combinations as expected', () => {
      cy.visit('/tests/button-customizations')
      cy.testImageSnapshot('Button Customizations')
   })

   // This test is currently ommited - it is difficult to test this consistently since
   // the Buttons in the specimen have animations involved
   // it('Renders button in different modes as expected', () => {
   //    cy.visit('/tests/button-modes')
   //    cy.testImageSnapshot('Button Modes')
   // })

   it('Renders button with custom color and textColor', () => {
      cy.visit('/tests/button-styles')
      cy.testImageSnapshot('Button Styles')
   })
})
