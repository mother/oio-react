import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import OIOContext from '../../OIOProvider/context'
import { Label, View } from '../../../src'
import selectArrowIcon from './selectArrowIcon.svg'

// ============================================================================
// Component
// ============================================================================

const Select = ({ appearance, id, label, ...props }) => {
   const oioContext = useContext(OIOContext)
   const inputAppearance = appearance || oioContext.formElementAppearanceStyle

   const appearanceStyleOptions = {
      outline: {
         borderColor: oioContext.formElementBorderColor,
         borderStyle: 'solid',
         borderWidth: oioContext.formElementBorderWidth,
         padding: '0 9px',
         '&:focus': {
            borderColor: oioContext.focusBorderColor,
            backgroundColor: oioContext.focusBackgroundColor
         }
      },
      plain: {
         border: '0px'
      }
   }

   return (
      <View float="left" width="100%">
         {label && <Label htmlFor={id}>{label}</Label>}
         <select
            {...props}
            id={id}
            css={{
               ...appearanceStyleOptions[inputAppearance],
               backgroundColor: oioContext.formElementBackgroundColor,
               borderRadius: oioContext.formElementBorderRadius,
               backgroundPosition: '95% 50%',
               backgroundRepeat: 'no-repeat',
               backgroundImage: `url('data:image/svg+xml;utf8,${selectArrowIcon}')`,
               backgroundSize: '4%',
               outline: 'none',
               float: 'left',
               width: '100%',
               height: '36px',
               fontSize: '14px',
               padding: '0 9px',
               transition: '200ms',
               '-webkit-appearance': 'none'
            }}
         />
      </View>
   )
}

// ============================================================================
// PropTypes + Export
// ============================================================================

Select.propTypes = {
   appearance: PropTypes.oneOf(['outline', 'plain']),
   id: PropTypes.string,
   label: PropTypes.string
}

Select.defaultProps = {
   appearance: undefined,
   id: undefined,
   label: undefined
}

export default React.memo(Select)
