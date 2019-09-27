context('TabMenu', () => {
   beforeEach(() => {
      cy.viewport(480, 60)
   })

   it('Renders basic style as expected', () => {
      cy.visit('/tests/tab-menu-basic')
      cy.testImageSnapshot('TabMenu - Basic')
   })

   it('Renders style customizations as expected', () => {
      cy.visit('/tests/tab-menu-customized')
      cy.testImageSnapshot('TabMenu - with customizations')
   })
})
