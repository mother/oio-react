const fs = require('fs')
const path = require('path')
const pluginTester = require('babel-plugin-tester')
const plugin = require('babel-plugin-macros')

const currentDir = path.resolve(__dirname)
const readFixtureFile = id => fs.readFileSync(`${currentDir}/__fixtures__/${id}.js`, 'utf8')

pluginTester({
   plugin,
   babelOptions: { filename: __filename },
   snapshot: true,
   tests: [
      {
         title: '#1 - works with template literals that have no expressions',
         code: readFixtureFile(1)
      },
      {
         title: '#2 - works with tagged template literals with mixed quasis and expressions',
         code: readFixtureFile(2)
      },
      {
         title: '#3 - works with tagged template literals with mixed only expressions',
         code: readFixtureFile(3)
      },
      {
         title: '#4 - works with various expression types',
         code: readFixtureFile(4)
      },
      {
         title: '#5 - works when quasis and expressions are used, but no breakpoints specified',
         code: readFixtureFile(5)
      }
   ]
})
