import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import API from './pages/API'
import Home from './pages/Home'
import Tests from './pages/Tests'
import { OIOProvider } from '../src'

ReactDOM.render((
   <BrowserRouter>
      <OIOProvider fontFamily="Helvetica Neue, sans-serif" zoom={0.5}>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/api" component={API} />
            <Route path="/tests" component={Tests} />
         </Switch>
      </OIOProvider>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
