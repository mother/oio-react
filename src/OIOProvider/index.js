// =======================================================
// OIOProvider
// All OIO components must be nested inside an OIOProvider
// You can nest OIOProvider inside other OIOProvider
// This component will be a Context provider in future PR
// =======================================================

import React, { useRef } from 'react'
/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import OIOContext from './context'
import normalizationStyles from './normalizationStyles'

const OIOProvider = ({
   children,
   className,
   fontFamily,
   fontSize,
   fontWeightLight,
   fontWeightNormal,
   fontWeightMedium,
   fontWeightSemibold,
   fontWeightBold,
   highlightColor,
   id,
   style,
   textSizeMultiplier,
   textSizeScaleRatio
}) => {
   const containerId = useRef(id || `oio-container-${Date.now()}`)

   // Props available to OIO Context Consumer
   const contextProps = {
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightNormal,
      fontWeightMedium,
      fontWeightSemibold,
      fontWeightBold,
      highlightColor,
      textSizeMultiplier,
      textSizeScaleRatio,
      containerId: containerId.current
   }

   return (
      <OIOContext.Provider value={contextProps}>
         <Global styles={normalizationStyles} />
         <div
            id={containerId.current}
            className={className}
            css={{ fontFamily, fontSize, ...style }}>
            {children}
         </div>
      </OIOContext.Provider>
   )
}

// =======================================================
// Props + Export
// =======================================================

OIOProvider.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
   fontFamily: PropTypes.string,
   fontSize: PropTypes.string,
   fontWeightLight: PropTypes.string,
   fontWeightNormal: PropTypes.string,
   fontWeightMedium: PropTypes.string,
   fontWeightSemibold: PropTypes.string,
   fontWeightBold: PropTypes.string,
   highlightColor: PropTypes.string,
   id: PropTypes.string,
   style: PropTypes.object,
   textSizeScaleRatio: PropTypes.number,
   textSizeMultiplier: PropTypes.number
}

OIOProvider.defaultProps = {
   children: null,
   className: undefined,
   fontFamily: 'sans-serif',
   fontSize: '16px',
   fontWeightLight: '300',
   fontWeightNormal: '400',
   fontWeightMedium: '500',
   fontWeightSemibold: '600',
   fontWeightBold: '700',
   highlightColor: '#2a383e',
   id: undefined,
   style: {},
   textSizeScaleRatio: 1.125,
   textSizeMultiplier: 1
}

export default OIOProvider
