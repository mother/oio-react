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

const OIOForm = ({
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
}) => {
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

OIOForm.propTypes = {
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

OIOForm.defaultProps = formContextDefaults

export default OIOForm
