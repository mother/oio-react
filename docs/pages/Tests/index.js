import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import ButtonChildrenSpecimen from '../../specimens/ButtonChildren'
import ButtonCustomizationsSpecimen from '../../specimens/ButtonCustomizations'
import ButtonModesSpecimen from '../../specimens/ButtonModes'
import ButtonSizesSpecimen from '../../specimens/ButtonSizes'
import ButtonStylesSpecimen from '../../specimens/ButtonStyles'
import FormOutlineSpecimen from '../../specimens/FormOutline'
import FormPlainSpecimen from '../../specimens/FormPlain'
import FormInputSizesSpecimen from '../../specimens/FormInputSizes'
import FormInputUnderlineSpecimen from '../../specimens/FormInputUnderline'
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
            <Route path={`${match.url}/button-children`} component={ButtonChildrenSpecimen} />
            <Route path={`${match.url}/button-customizations`} component={ButtonCustomizationsSpecimen} />
            <Route path={`${match.url}/button-modes`} component={ButtonModesSpecimen} />
            <Route path={`${match.url}/button-sizes`} component={ButtonSizesSpecimen} />
            <Route path={`${match.url}/button-styles`} component={ButtonStylesSpecimen} />

            <Route path={`${match.url}/form-outine-appearance`} component={FormOutlineSpecimen} />
            <Route path={`${match.url}/form-plain-appearance`} component={FormPlainSpecimen} />
            <Route path={`${match.url}/form-input-size`} component={FormInputSizesSpecimen} />
            <Route path={`${match.url}/form-input-underline`} component={FormInputUnderlineSpecimen} />

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
