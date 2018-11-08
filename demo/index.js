import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { OIO } from '../src'
import OIOContainer from './pages/OIO'

ReactDOM.render((
   <BrowserRouter>
      <OIO style={{ margin: '60px' }}>
         <header>
            <h1>
               OIO
            </h1>
         </header>
         <div>
            <Link to="/">OIO Container</Link>
         </div>
         <Route exact path="/" component={OIOContainer} />
      </OIO>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
