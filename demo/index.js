import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { OIO } from '../src'
import OIOContainer from './pages/OIO'
import Text from './pages/Text'

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
            <Link to="/text">Text</Link>
         </div>
         <Route exact path="/" component={OIOContainer} />
         <Route path="/text" component={Text} />
      </OIO>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
