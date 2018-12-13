import fs from 'fs'
import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from 'babel-plugin-macros'

pluginTester({
   plugin,
   babelOptions: { filename: __filename },
   snapshot: true,
   tests: [
      {
         title: '#1 - works with template literals that have no expressions',
         code: fs.readFileSync(`${path.resolve(__dirname)}/fixtures/1.js`, 'utf8')
      },
      {
         title: '#2 - works with tagged template literals with mixed quasis and expressions',
         code: fs.readFileSync(`${path.resolve(__dirname)}/fixtures/2.js`, 'utf8')
      },
      {
         title: '#3 - works with tagged template literals with mixed only expressions',
         code: fs.readFileSync(`${path.resolve(__dirname)}/fixtures/3.js`, 'utf8')
      }
   ]
})
