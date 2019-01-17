import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { OIOProvider } from '../src'
import OIOProviderPage from './pages/OIOProvider'
import GridPage from './pages/Grid'
import TextPage from './pages/Text'
import ViewPage from './pages/View'
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
               <NavLink to="/grid" activeClassName={style.active}>Grid</NavLink>
               <NavLink to="/text" activeClassName={style.active}>Text</NavLink>
               <NavLink to="/view" activeClassName={style.active}>View</NavLink>
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
            <Route path="/grid" component={GridPage} />
            <Route path="/text" component={TextPage} />
            <Route path="/view" component={ViewPage} />
         </div>
      </OIOProvider>
   </BrowserRouter>
), document.getElementById('container'))

if (module.hot) {
   module.hot.accept()
}
