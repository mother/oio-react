import pluginTester from 'babel-plugin-tester'
import plugin from 'babel-plugin-macros'

pluginTester({
   plugin,
   babelOptions: { filename: __filename },
   snapshot: true,
   tests: {
      'works with ordinary string literals': {
         code: `
            import OIOResponsiveStringMacro from '../macro'
            const result = OIOResponsiveStringMacro('100[a] 200[b]')`
      }
      // 'works with template literals': {
      //    code: "import OIOResponsiveStringMacro from '../macro' \n" +
      //       "const result = OIOResponsiveStringMacro(`${a}[a] 100[b]`)"
      // }
   }
})
