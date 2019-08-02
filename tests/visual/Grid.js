import breakpoints from '../fixtures/breakpoints'

context('Grid', () => {
   before(() => {
      cy.visit('/tests/grid-responsive')
   })

   // Visual Screenshot test of Grid specimen at all breakpoints
   breakpoints.forEach((breakpoint) => {
      it(`Renders correctly at breakpoint - ${breakpoint.name}`, () => {
         cy.viewport(breakpoint.width, breakpoint.height)
         cy.testImageSnapshot(`Grid [${breakpoint.name}]`)
      })
   })

   it('Renders different GridCell background image option combinations as expected', () => {
      cy.viewport(breakpoints[1].width, breakpoints[1].height)
      cy.visit('/tests/grid-cell-background-image')
      cy.testImageSnapshot('GridCell Background Image')
   })
})
