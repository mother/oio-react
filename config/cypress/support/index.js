import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
   customSnapshotsDir: '../../tests/visual/screenshots'
})

// Command to test Image Screenshots and match/check for visual regressions
// Screenshot testing only takes place in headless environment where
// we can ensure consistency
Cypress.Commands.add('testImageSnapshot', (fileName) => {
   const env = Cypress.env()

   if (env.name === 'headless') {
      cy.matchImageSnapshot(fileName)
   }
})
