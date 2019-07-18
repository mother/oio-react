const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
   mode: 'production',
   entry: {
      main: './src/index.js'
   },
   output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: 'index.js',
      library: 'oio',
      libraryTarget: 'umd'
   },
   externals: {
      react: {
         commonjs: 'react',
         commonjs2: 'react',
         amd: 'React',
         root: 'React'
      },
      'react-dom': {
         commonjs: 'react-dom',
         commonjs2: 'react-dom',
         amd: 'ReactDOM',
         root: 'ReactDOM'
      }
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
         {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
         }
      ]
   },
   plugins: [
      new ProgressBarPlugin()
   ],
   resolve: {
      alias: {
         react: path.resolve(__dirname, '../../node_modules/react'),
         'react-dom': path.resolve(__dirname, '../../node_modules/react-dom')
      }
   }
}
