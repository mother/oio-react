import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import OIOContext from '../../OIOProvider/context'
import { Text, View } from '../../../src'

// ============================================================================
// Component
// ============================================================================

const Label = ({
   children,
   htmlFor,
   required,
   ...props
}) => {
   const oioContext = useContext(OIOContext)

   return (
      <View width="100%" marginBottom="3px[a-d] 9px[e-f]">
         <Text
            size={oioContext.formLabelTextSize}
            color={oioContext.formLabelTextColor}
            weight={oioContext.formLabelTextWeight}
            transform={oioContext.formLabelTextTransform}>
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
