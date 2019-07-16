import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'
import ButtonPage from './Button'
import GridPage from './Grid'
import OIOProviderPage from './OIOProvider'
import SpacerPage from './Spacer'
import TextPage from './Text'
import ViewPage from './View'
import style from './style.less'

export default class API extends Component {
   static propTypes = {
      match: PropTypes.object.isRequired
   }

   render() {
      const { match } = this.props

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
               <h1>OIO</h1>
               <div className={style.nav}>
                  <NavLink exact to={match.url} activeClassName={style.active}>
                     OIOProvider
                  </NavLink>
                  <NavLink to={`${match.url}/button`} activeClassName={style.active}>
                     Button
                  </NavLink>
                  <NavLink to={`${match.url}/spacer`} activeClassName={style.active}>
                     Spacer
                  </NavLink>
                  <NavLink to={`${match.url}/text`} activeClassName={style.active}>
                     Text
                  </NavLink>
                  <NavLink to={`${match.url}/view`} activeClassName={style.active}>
                     View
                  </NavLink>
                  <NavLink to={`${match.url}/grid`} activeClassName={style.active}>
                     Grid
                  </NavLink>
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
               <Route path={`${match.url}/button`} component={ButtonPage} />
               <Route exact path={match.url} component={OIOProviderPage} />
               <Route path={`${match.url}/spacer`} component={SpacerPage} />
               <Route path={`${match.url}/text`} component={TextPage} />
               <Route path={`${match.url}/view`} component={ViewPage} />
               <Route path={`${match.url}/grid`} component={GridPage} />
            </div>
         </div>
      )
   }
}
