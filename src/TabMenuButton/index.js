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

const TabMenuButton = ({
   badgeNumber,
   highlightColor,
   isActive,
   linkTo,
   linkExact,
   linkReplace,
   name,
   onClick,
   paddingHorizontal,
   size,
   textColor,
   textFontFamily,
   textSize,
   textWeight
}) => {
   const { buttonLinkAdapter } = useContext(OIOContext)
   const tabButtonJSX = (
      <View
         float="left"
         height="100%"
         display="flex"
         alignItems="center"
         onClick={onClick}
         css={style.tabButton({ highlightColor, isActive, textColor })}
         paddingHorizontal={paddingHorizontal}>
         <Text
            fontFamily={textFontFamily}
            size={textSize || buttonSizeDefaults[size].textSize}
            weight={textWeight}
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
      return buttonLinkAdapter.render({
         linkTo,
         linkExact,
         linkReplace,
         children: tabButtonJSX
      })
   }

   return tabButtonJSX
}

TabMenuButton.propTypes = {
   badgeNumber: PropTypes.number,
   highlightColor: PropTypes.string,
   isActive: PropTypes.bool,
   linkTo: PropTypes.any,
   linkExact: PropTypes.bool,
   linkReplace: PropTypes.bool,
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   paddingHorizontal: PropTypes.string,
   size: PropTypes.string,
   textColor: PropTypes.string,
   textFontFamily: PropTypes.string,
   textSize: PropTypes.string,
   textWeight: PropTypes.string
}

TabMenuButton.defaultProps = {
   badgeNumber: undefined,
   highlightColor: '#000',
   isActive: false,
   linkTo: undefined,
   linkExact: false,
   linkReplace: false,
   onClick: undefined,
   paddingHorizontal: undefined,
   size: undefined,
   textColor: '#888',
   textFontFamily: undefined,
   textSize: undefined,
   textWeight: 'medium'
}

export default React.memo(TabMenuButton)
