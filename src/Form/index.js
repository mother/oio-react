// =======================================================
// Form Provider
// =======================================================

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import OIOContext from '../OIOProvider/context'

// =======================================================
// Context Creation & Context Provider Defaults
// =======================================================

const formContextDefaults = {
   elementAppearance: 'outline',
   elementBorderColor: '#ddd',
   elementBorderRadius: '3px',
   elementBorderWidth: '2px',
   elementBackgroundColor: 'transparent',
   elementFocusBackgroundColor: 'rgba(0,0,0,0.01)',
   elementFocusBorderColor: '#888',
   elementTextColor: '#333',
   highlightColor: undefined,
   labelTextColor: '#444',
   labelTextSize: '0.8',
   labelTextTransform: 'uppercase',
   labelTextWeight: 'bold'
}

// Passing these defaults to `createContext` will ensure that
// even if there is no Form provider, consumers will still access
// these default values. In other words, this will allow form elements
// to be used with or without a Form component, and the defaults will
// still be inherited properly regardless.
// See https://reactjs.org/docs/context.html#reactcreatecontext for
// more details about the default arg.
const OIOFormContext = React.createContext(formContextDefaults)

// =======================================================
// Component
// =======================================================

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
   highlightColor,
   labelTextColor,
   labelTextSize,
   labelTextTransform,
   labelTextWeight,
   ...formProps
}) => {
   const oioContext = useContext(OIOContext)

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
      labelTextWeight,
      highlightColor: highlightColor || oioContext.highlightColor
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
   highlightColor: PropTypes.string,
   labelTextColor: PropTypes.string,
   labelTextSize: PropTypes.string,
   labelTextTransform: PropTypes.string,
   labelTextWeight: PropTypes.string
}

OIOForm.defaultProps = formContextDefaults

// =======================================================
// Exports
// =======================================================

export { OIOFormContext }
export default OIOForm
