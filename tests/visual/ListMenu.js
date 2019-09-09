context('ListMenu', () => {
   beforeEach(() => {
      cy.viewport(300, 300)
   })

   it('Renders as expected', () => {
      cy.visit('/tests/list-menu-basic')
      cy.testImageSnapshot('ListMenu - Basic')
   })
})
