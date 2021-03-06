import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from '../../../src'
import { OIOFormContext } from '..'

// ============================================================================
// Component
// ============================================================================

const Label = ({
   children,
   htmlFor,
   required,
   ...props
}) => {
   const formContext = useContext(OIOFormContext)
   return (
      <View width="100%" marginBottom="3px[a-d] 9px[e-f]">
         <Text
            size={formContext.labelTextSize}
            color={formContext.labelTextColor}
            weight={formContext.labelTextWeight}
            transform={formContext.labelTextTransform}>
            {/* There is a bug in jsx-a11y
            TODO: update https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/455 */}
            {/* eslint-disable jsx-a11y/label-has-for */}
            <label
               htmlFor={htmlFor}
               {...props}>
               {children}
               {required && (
                  <span style={{ top: '2px', fontSize: '120%', color: 'red' }}> *</span>
               )}
            </label>
            {/* eslint-enable jsx-a11y/label-has-for */}
         </Text>
      </View>
   )
}

// ============================================================================
// PropTypes + Export
// ============================================================================

Label.propTypes = {
   children: PropTypes.node,
   htmlFor: PropTypes.string,
   required: PropTypes.bool
}

Label.defaultProps = {
   children: null,
   htmlFor: undefined,
   required: false
}

export default React.memo(Label)
