import React from 'react'
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'

// =======================================================
// Spinner Animation
// =======================================================

const spinningAnimation = keyframes`
   0% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
   }

   100% {
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
   }
`

// =======================================================
// Component
// =======================================================

const Spinner = ({
   color,
   width,
   height
}) => (
   <div
      css={{
         width,
         height,
         display: 'inline-block',
         borderRadius: '50%',
         boxShadow: `0px 0px 0px 2px ${tinycolor(color).setAlpha('.1').toString()},
         1px 0px 2px ${tinycolor(color).setAlpha('.8').toString()}`,
         animation: `${spinningAnimation} 1s infinite linear`
      }}
   />
)

Spinner.propTypes = {
   color: PropTypes.string,
   height: PropTypes.string,
   width: PropTypes.string
}

Spinner.defaultProps = {
   color: 'rgb(255,255,255)',
   height: '60px',
   width: '60px'
}

export default React.memo(Spinner)
