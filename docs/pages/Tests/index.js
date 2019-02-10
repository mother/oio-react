import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import OIOProvider from './OIOProvider'

export default class Tests extends Component {
   static propTypes = {
      match: PropTypes.object.isRequired
   }

   render() {
      const { match } = this.props

      return (
         <Switch>
            <Route path={`${match.url}/oio-provider`} component={OIOProvider} />
         </Switch>
      )
   }
}
