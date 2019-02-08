import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import OIOProviderPage from './OIOProvider'
import style from './style.less'

export default class Docs extends Component {
   render() {
      return (
         <div>
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
                  <NavLink to="/api" activeClassName={style.active}>OIOProvider</NavLink>
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
               <Route exact path="/api" component={OIOProviderPage} />
            </div>
         </div>
      )
   }
}
