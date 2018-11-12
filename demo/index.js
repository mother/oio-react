import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { OIO } from '../src'
import OIOContainer from './pages/OIO'
import Text from './pages/Text'
import style from './style.less'

ReactDOM.render((
   <BrowserRouter>
      <OIO fontFamily="Helvetica Neue, sans-serif">
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
               <NavLink exact to="/" activeClassName={style.active}>OIO Container</NavLink>
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
            <Route exact path="/" component={OIOContainer} />
            <Route path="/text" component={Text} />
         </div>
      </OIO>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
