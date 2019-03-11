const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
   // For headless browser tests (electron), set browser window
   // to be 1920 x 1080 before all tests start. This is to ensure
   // consistency beetween all screenshot tests
   on('before:browser:launch', (browser) => {
      if (browser.name === 'electron') {
         return {
            width: 1920,
            height: 1080
         }
      }

      return null
   })

   // Add Screenshot Image Matching Plugin
   // For more info on this plugin, visit:
   // https://github.com/palmerhq/cypress-image-snapshot
   addMatchImageSnapshotPlugin(on, config)
}
