import React, { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Text, View } from '../../src'
import OIOContext from '../OIOProvider/context'
import { buttonSizeDefaults } from '../Button'
import style from './style'

// =======================================================
// Arrow Button Style
// =======================================================

const TabButton = ({
   badgeNumber,
   highlightColor,
   isActive,
   linkTo,
   linkReplace,
   name,
   onClick,
   paddingHorizontal,
   size
}) => {
   const { buttonLinkAdapter } = useContext(OIOContext)
   const tabButtonJSX = (
      <View
         float="left"
         height="100%"
         display="flex"
         alignItems="center"
         css={style.tabButton({ highlightColor, isActive })}
         paddingHorizontal={paddingHorizontal}>
         <Text
            size={buttonSizeDefaults[size].textSize}
            weight="medium"
            style={{
               height: '18px',
               whiteSpace: 'nowrap',
               overflow: 'hidden',
               textOverflow: 'ellipsis'
            }}>
            {name}
            {typeof badgeNumber === 'number' && (
               <View
                  display="inline-block"
                  marginLeft="6px">
                  <View
                     className="badge"
                     display="flex"
                     height="16px"
                     justifyContent="center"
                     alignItems="center"
                     padding="0 6px"
                     borderRadius="12px">
                     <Text size="0.8" weight="medium">
                        {badgeNumber}
                     </Text>
                  </View>
               </View>
            )}
         </Text>
      </View>
   )

   if (linkTo && buttonLinkAdapter) {
      return buttonLinkAdapter.render({ linkTo, linkReplace, children: tabButtonJSX })
   }

   return tabButtonJSX
}

TabButton.propTypes = {
   badgeNumber: PropTypes.number,
   highlightColor: PropTypes.string,
   isActive: PropTypes.bool,
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   paddingHorizontal: PropTypes.string,
   size: PropTypes.string
}

TabButton.defaultProps = {
   badgeNumber: undefined,
   highlightColor: '#000',
   isActive: false,
   onClick: undefined,
   paddingHorizontal: undefined,
   size: undefined
}

export default React.memo(TabButton)
