context('Carousel', () => {
   before(() => {
      cy.visit('/tests/carousel-basic')
   })

   it('renders as expected after viewport resize and clicking arrow buttons', () => {
      cy.viewport(420, 270)
      // Allow for initial setup
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500)

      // Click Right (Next) arrow button 3 times (to go to pane 4 of 12)
      cy.get('#oio-carousel-right-arrow-button').click({ waitForAnimations: true })
      cy.get('#oio-carousel-right-arrow-button').click({ waitForAnimations: true })
      cy.get('#oio-carousel-right-arrow-button').click({ waitForAnimations: true })

      // We wait for 500ms to account for scroll-to animation duration (animate from pane 1 to 4)
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500)
      cy.testImageSnapshot('Carousel - A')

      // Resize window to ensure Carousel automatically and correctly
      // scrolls to the correct position and state (pane 3 of 3)
      cy.viewport(1600, 270)

      // We wait for 1500ms to account for scroll-to animation
      // The animation is longer here because the viewport is much larger
      // than in the case above (and therefore takes longer to animate)
      // https://www.npmjs.com/package/animated-scroll-to
      // (speed of scroll animation is 500ms per 1000px)
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1500)
      cy.testImageSnapshot('Carousel - E')
   })
})
