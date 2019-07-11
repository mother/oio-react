import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'
import { Text } from '../../../src'
import ButtonPage from './Button'
import FormPage from './Form'
import GridPage from './Grid'
import OIOProviderPage from './OIOProvider'
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
                  top: '0px',
                  bottom: '0px',
                  width: '210px',
                  padding: '60px 0px 0px 30px',
                  borderRight: '1px solid #ddd',
                  overflow: 'auto'
               }}>
               <Text size="8" weight="medium">OIO</Text>
               <div className={style.nav}>
                  <NavLink exact to={match.url} activeClassName={style.active}>
                     OIOProvider
                  </NavLink>
                  <NavLink to={`${match.url}/button`} activeClassName={style.active}>
                     Button
                  </NavLink>
                  <NavLink to={`${match.url}/form`} activeClassName={style.active}>
                     Forms
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
                  left: '270px',
                  right: '0px',
                  height: '100%',
                  overflow: 'auto'
               }}>
               <Route path={`${match.url}/button`} component={ButtonPage} />
               <Route path={`${match.url}/form`} component={FormPage} />
               <Route exact path={match.url} component={OIOProviderPage} />
               <Route path={`${match.url}/text`} component={TextPage} />
               <Route path={`${match.url}/view`} component={ViewPage} />
               <Route path={`${match.url}/grid`} component={GridPage} />
            </div>
         </div>
      )
   }
}
