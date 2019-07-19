const specimenModules = require.context('./', true, /^(.*\.(js$))[^.]*$/im)
specimenModules.keys().forEach((filename) => {
   if (filename !== './index.js') {
      const specimenName = filename.split('/').slice(1, 2)[0]
      exports[`${specimenName}Specimen`] = specimenModules(filename).default
   }
})
