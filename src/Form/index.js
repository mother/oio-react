// =======================================================
// Form Provider
// =======================================================

import React from 'react'
import PropTypes from 'prop-types'

export const formContextDefaults = {
   formElementAppearance: 'outline',
   formElementBorderColor: '#ddd',
   formElementBorderRadius: '3px',
   formElementBorderWidth: '2px',
   formElementBackgroundColor: 'transparent',
   formElementFocusBackgroundColor: 'rgba(0,0,0,0.01)',
   formElementFocusBorderColor: '#888',
   formElementTextColor: '#333',
   formLabelTextColor: '#444',
   formLabelTextSize: '0.8',
   formLabelTextTransform: 'uppercase',
   formLabelTextWeight: 'bold'
}

export const OIOFormContext = React.createContext()

export default class OIOForm extends React.Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      formElementAppearance: PropTypes.oneOf(['outline', 'plain']),
      formElementBorderColor: PropTypes.string,
      formElementBorderRadius: PropTypes.string,
      formElementBorderWidth: PropTypes.string,
      formElementBackgroundColor: PropTypes.string,
      formElementFocusBackgroundColor: PropTypes.string,
      formElementFocusBorderColor: PropTypes.string,
      formElementTextColor: PropTypes.string,
      formLabelTextColor: PropTypes.string,
      formLabelTextSize: PropTypes.string,
      formLabelTextTransform: PropTypes.string,
      formLabelTextWeight: PropTypes.string
   }

   static defaultProps = formContextDefaults

   render() {
      const {
         children,
         formElementAppearance,
         formElementBorderColor,
         formElementBorderRadius,
         formElementBorderWidth,
         formElementBackgroundColor,
         formElementFocusBackgroundColor,
         formElementFocusBorderColor,
         formElementTextColor,
         formLabelTextColor,
         formLabelTextSize,
         formLabelTextTransform,
         formLabelTextWeight,
         ...formProps
      } = this.props

      // Props available to OIO Context Consumer
      const contextProps = {
         formElementAppearance,
         formElementBorderColor,
         formElementBorderRadius,
         formElementBorderWidth,
         formElementBackgroundColor,
         formElementFocusBackgroundColor,
         formElementFocusBorderColor,
         formElementTextColor,
         formLabelTextColor,
         formLabelTextSize,
         formLabelTextTransform,
         formLabelTextWeight
      }

      return (
         <OIOFormContext.Provider value={contextProps}>
            <form {...formProps}>
               {children}
            </form>
         </OIOFormContext.Provider>
      )
   }
}
