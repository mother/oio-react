const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../config/webpack/dev')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
   publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler, {
   log: console.log, // eslint-disable-line no-console
   path: '/__webpack_hmr',
   heartbeat: 10 * 1000
}))

app.use('/assets', express.static('docs/assets'))

app.get('*', (req, res, next) => {
   res.sendFile('index.html', { root: `${__dirname}/` })
})

const server = app.listen(process.env.PORT || 8000, () => {
   const port = server.address().port
   const pattern = Array(80).join('=')
   /* eslint-disable no-console */
   console.log(`\n${pattern}`)
   console.log(`Starting OIO Docs on port ${port} at ${new Date()}`)
   console.log(`${pattern}\n`)
   /* eslint-enable no-console */
})
