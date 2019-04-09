import breakpoints from '../fixtures/breakpoints'

context('Grid', () => {
   before(() => {
      cy.visit('/tests/grid-responsive')
   })

   // Visual Screenshot test of Home page at all breakpoints
   breakpoints.forEach((breakpoint) => {
      it(`Renders correctly at breakpoint - ${breakpoint.name}`, () => {
         cy.viewport(breakpoint.width, breakpoint.height)
         cy.testImageSnapshot(`Grid [${breakpoint.name}]`)
      })
   })
})
