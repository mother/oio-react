context.only('View', () => {
   it('Renders kitchen sink test as expected', () => {
      cy.viewport(1360, 860)
      cy.visit('/tests/view-kitchen-sink')
      cy.testImageSnapshot('View - Kitchen Sink')
   })

   it('View events are supported', () => {
      cy.viewport(1360, 860)
      cy.visit('/tests/view-events')

      const $div = cy.get('div:first')
      $div.click()
      $div.should('contain', 'click')
      $div.click()
      $div.should('contain', 'click')
      $div.trigger('mouseover')
      $div.should('contain', 'mouseover')
      $div.trigger('touchstart')
      $div.should('contain', 'touchstart')
   })
})
