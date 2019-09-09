import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import ArrowRightIcon from './arrowRightIcon'
import { buttonSizeDefaults } from '../Button'
import Text from '../Text'
import View from '../View'
import style from './style'

const ListMenuButton = ({
   activeBackgroundColor,
   activeTextColor,
   borderRadius,
   isActive,
   name,
   onClick,
   paddingHorizontal,
   size,
   showActiveArrow,
   textColor
}) => (
   <View
      float="left"
      width="100%"
      onClick={onClick}
      borderRadius={borderRadius}
      css={style.listMenuButton({
         activeBackgroundColor,
         activeTextColor,
         isActive,
         textColor
      })}>
      <View
         display="flex"
         justifyContent="space-between"
         alignItems="fill"
         float="left"
         width="100%"
         minHeight={buttonSizeDefaults[size].height}
         paddingHorizontal={paddingHorizontal}>
         <View
            flex="1 1 auto"
            display="flex"
            alignItems="center">
            <Text
               size={buttonSizeDefaults[size].textSize}
               weight={isActive ? 'bold' : 'medium'}>
               {name}
            </Text>
         </View>
         {showActiveArrow && (
            <View
               flex="0 0 auto"
               display="flex"
               alignItems="center">
               <View
                  className="arrow"
                  flex="0 0 auto"
                  marginLeft="12px"
                  top="-2px"
                  alignItems="center">
                  <ArrowRightIcon
                     width="8px"
                     height="8px"
                     strokeWidth="4px"
                     color="#888"
                  />
               </View>
            </View>
         )}
      </View>
   </View>
)

ListMenuButton.propTypes = {
   activeBackgroundColor: PropTypes.string,
   activeTextColor: PropTypes.string,
   borderRadius: PropTypes.string,
   isActive: PropTypes.bool,
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   paddingHorizontal: PropTypes.string,
   size: PropTypes.string,
   showActiveArrow: PropTypes.bool,
   textColor: PropTypes.string
}

ListMenuButton.defaultProps = {
   activeBackgroundColor: 'rgba(0,0,0,0.04)',
   activeTextColor: '#333',
   borderRadius: '0px',
   isActive: false,
   onClick: undefined,
   paddingHorizontal: '18px',
   size: 'lg',
   showActiveArrow: false,
   textColor: '#666'
}

export default ListMenuButton
