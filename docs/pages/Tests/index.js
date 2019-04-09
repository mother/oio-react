import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import GridResponsive from '../../specimens/GridResponsive'
import OIOProvider from '../../specimens/OIOProvider'
import TextColors from '../../specimens/TextColors'
import TextSizes from '../../specimens/TextSizes'
import TextTransforms from '../../specimens/TextTransforms'
import TextWeights from '../../specimens/TextWeights'
import ViewKitchenSink from '../../specimens/ViewKitchenSink'

export default class Tests extends Component {
   static propTypes = {
      match: PropTypes.object.isRequired
   }

   render() {
      const { match } = this.props

      return (
         <Switch>
            <Route path={`${match.url}/grid-responsive`} component={GridResponsive} />
            <Route path={`${match.url}/oio-provider`} component={OIOProvider} />
            <Route path={`${match.url}/text-colors`} component={TextColors} />
            <Route path={`${match.url}/text-sizes`} component={TextSizes} />
            <Route path={`${match.url}/text-transforms`} component={TextTransforms} />
            <Route path={`${match.url}/text-weights`} component={TextWeights} />
            <Route path={`${match.url}/view-kitchen-sink`} component={ViewKitchenSink} />
         </Switch>
      )
   }
}
