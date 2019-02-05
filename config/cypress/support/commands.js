import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
   customSnapshotsDir: '../../tests/ui/__screenshots'
})
