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
   padding,
   showActiveArrow,
   showActiveMarker,
   textColor
}) => (
   <View
      onClick={onClick}
      css={style.listMenuButton({
         activeBackgroundColor,
         activeTextColor,
         borderRadius,
         isActive,
         showActiveMarker,
         textColor
      })}>
      <View
         display="flex"
         justifyContent="space-between"
         alignItems="fill"
         float="left"
         width="100%"
         minHeight={buttonSizeDefaults.lg.height}
         paddingHorizontal={padding}>
         <View
            flex="1 1 auto"
            display="flex"
            alignItems="center">
            <Text
               size={buttonSizeDefaults.lg.textSize}
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
   padding: PropTypes.string,
   showActiveArrow: PropTypes.bool,
   showActiveMarker: PropTypes.bool,
   textColor: PropTypes.string
}

ListMenuButton.defaultProps = {
   activeBackgroundColor: 'rgba(0,0,0,0.04)',
   activeTextColor: '#333',
   borderRadius: '0px',
   isActive: false,
   onClick: undefined,
   padding: '18px',
   showActiveArrow: false,
   showActiveMarker: false,
   textColor: '#666'
}

export default ListMenuButton
