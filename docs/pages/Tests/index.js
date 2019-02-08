import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import OIOProvider from './OIOProvider'

export default class Tests extends Component {
   render() {
      return (
         <Switch>
            <Route path="/tests/oio-provider" component={OIOProvider} />
         </Switch>
      )
   }
}
