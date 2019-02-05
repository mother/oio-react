const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
   on('before:browser:launch', (browser) => {
      if (browser.name === 'electron') {
         return {
            width: 1920,
            height: 1080
         }
      }

      return null
   })

   // For more info on this plugin, visit:
   // https://github.com/palmerhq/cypress-image-snapshot
   addMatchImageSnapshotPlugin(on, config)
}
