import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { OIOProvider } from '../src'
import OIOProviderPage from './pages/OIOProvider'
import ButtonPage from './pages/Button'
import TextPage from './pages/Text'
import style from './style.less'

ReactDOM.render((
   <BrowserRouter>
      <OIOProvider fontFamily="Helvetica Neue, sans-serif">
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
               <NavLink exact to="/" activeClassName={style.active}>OIOProvider</NavLink>
               <NavLink to="/button" activeClassName={style.active}>Button</NavLink>
               <NavLink to="/text" activeClassName={style.active}>Text</NavLink>
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
            <Route path="/button" component={ButtonPage} />
            <Route path="/text" component={TextPage} />
         </div>
      </OIOProvider>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
