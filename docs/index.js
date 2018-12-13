import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { OIOProvider } from '../src'
import OIOProviderPage from './pages/OIOProvider'
import style from './style.less'
import r from '../macro'

ReactDOM.render((
   <BrowserRouter>
      <OIOProvider fontFamily={r`Helvetica Neue, sans-serif [d-f] serif [a-c]`}>
         <div
            style={{
               position: 'absolute',
               top: '48px',
               bottom: '48px',
               width: '240px',
               padding: '12px 0px 0px 30px',
               borderRight: '1px solid #ddd',
               overflow: 'auto'
            }}>
            <h1>
               OIO
            </h1>
            <div className={style.nav}>
               <NavLink to="/" activeClassName={style.active}>OIOProvider</NavLink>
            </div>
         </div>
         <div
            style={{
               position: 'absolute',
               left: '300px',
               right: '0px',
               height: '100%',
               overflow: 'auto'
            }}>
            <Route exact path="/" component={OIOProviderPage} />
         </div>
      </OIOProvider>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
