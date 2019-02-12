import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
   customSnapshotsDir: '../../tests/visual/screenshots'
})

Cypress.Commands.add('testImageSnapshot', (fileName) => {
   const env = Cypress.env()

   if (env.name === 'headless') {
      cy.matchImageSnapshot(fileName)
   }
})
