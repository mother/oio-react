context('ListMenu', () => {
   beforeEach(() => {
      cy.viewport(300, 300)
   })

   it('Renders basic style as expected', () => {
      cy.visit('/tests/list-menu-basic')
      cy.testImageSnapshot('ListMenu - Basic')
   })

   it('Renders with active arrow and style customizations as expected', () => {
      cy.visit('/tests/list-menu-active-arrow')
      cy.testImageSnapshot('ListMenu - with active arrow')
   })
})
