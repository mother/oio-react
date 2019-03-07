import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
   customSnapshotsDir: '../../tests/visual/screenshots'
})

// Command to test Image Screenshots and match/check for visual regressions
// Screenshot testing only takes place in headless environment where
// we can ensure consistency (we can ensure screenshots are taken at the
// same resolution, browser window/viewport size and with same browser - electron)
Cypress.Commands.add('testImageSnapshot', (fileName) => {
   const env = Cypress.env()

   if (env.name === 'headless') {
      cy.matchImageSnapshot(fileName)
   }
})
