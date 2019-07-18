// =======================================================
// Form Provider
// =======================================================

import React from 'react'
import PropTypes from 'prop-types'

export const formContextDefaults = {
   elementAppearance: 'outline',
   elementBorderColor: '#ddd',
   elementBorderRadius: '3px',
   elementBorderWidth: '2px',
   elementBackgroundColor: 'transparent',
   elementFocusBackgroundColor: 'rgba(0,0,0,0.01)',
   elementFocusBorderColor: '#888',
   elementTextColor: '#333',
   labelTextColor: '#444',
   labelTextSize: '0.8',
   labelTextTransform: 'uppercase',
   labelTextWeight: 'bold'
}

export const OIOFormContext = React.createContext()

export default class OIOForm extends React.Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      elementAppearance: PropTypes.oneOf(['outline', 'plain']),
      elementBorderColor: PropTypes.string,
      elementBorderRadius: PropTypes.string,
      elementBorderWidth: PropTypes.string,
      elementBackgroundColor: PropTypes.string,
      elementFocusBackgroundColor: PropTypes.string,
      elementFocusBorderColor: PropTypes.string,
      elementTextColor: PropTypes.string,
      labelTextColor: PropTypes.string,
      labelTextSize: PropTypes.string,
      labelTextTransform: PropTypes.string,
      labelTextWeight: PropTypes.string
   }

   static defaultProps = formContextDefaults

   render() {
      const {
         children,
         elementAppearance,
         elementBorderColor,
         elementBorderRadius,
         elementBorderWidth,
         elementBackgroundColor,
         elementFocusBackgroundColor,
         elementFocusBorderColor,
         elementTextColor,
         labelTextColor,
         labelTextSize,
         labelTextTransform,
         labelTextWeight,
         ...formProps
      } = this.props

      // Props available to OIO Context Consumer
      const contextProps = {
         elementAppearance,
         elementBorderColor,
         elementBorderRadius,
         elementBorderWidth,
         elementBackgroundColor,
         elementFocusBackgroundColor,
         elementFocusBorderColor,
         elementTextColor,
         labelTextColor,
         labelTextSize,
         labelTextTransform,
         labelTextWeight
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
