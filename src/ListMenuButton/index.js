import { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import ArrowRightIcon from '../assets/icons/arrowRight'
import OIOContext from '../OIOProvider/context'
import { buttonSizeDefaults } from '../Button'
import { Text, View } from '../../src'
import style from './style'

const ListMenuButton = ({
   activeBackgroundColor,
   activeTextColor,
   activeTextWeight,
   badgeNumber,
   borderRadius,
   isActive,
   leftDetail,
   linkTo,
   linkExact,
   linkReplace,
   name,
   onClick,
   paddingHorizontal,
   size,
   showActiveArrow,
   textColor,
   textFontFamily,
   textSize,
   textWeight
}) => {
   const { buttonLinkAdapter } = useContext(OIOContext)

   const listMenuButtonJSX = (
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
            {leftDetail && (
               <View
                  flex="0 0 auto"
                  display="flex"
                  alignItems="center"
                  marginRight={paddingHorizontal}>
                  {leftDetail}
               </View>
            )}
            <View
               flex="1 1 auto"
               display="flex"
               alignItems="center"
               paddingRight={paddingHorizontal}>
               <Text
                  fontFamily={textFontFamily}
                  size={textSize || buttonSizeDefaults[size].textSize}
                  weight={isActive ? activeTextWeight : textWeight}>
                  {name}
               </Text>
            </View>
            {typeof badgeNumber === 'number' && (
               <View
                  display="inline-flex"
                  alignItems="center"
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
            {showActiveArrow && (
               <View
                  flex="0 0 auto"
                  display="flex"
                  alignItems="center">
                  <View
                     position="relative"
                     className="arrow"
                     flex="0 0 auto"
                     marginLeft="12px"
                     top="-2px"
                     alignItems="center">
                     <ArrowRightIcon
                        width="8px"
                        height="8px"
                        strokeWidth="4px"
                        color={activeTextColor}
                     />
                  </View>
               </View>
            )}
         </View>
      </View>
   )

   if (linkTo && buttonLinkAdapter) {
      return buttonLinkAdapter.render({
         linkTo,
         linkExact,
         linkReplace,
         children: listMenuButtonJSX
      })
   }

   return listMenuButtonJSX
}

ListMenuButton.propTypes = {
   activeBackgroundColor: PropTypes.string,
   activeTextColor: PropTypes.string,
   activeTextWeight: PropTypes.string,
   badgeNumber: PropTypes.number,
   borderRadius: PropTypes.string,
   isActive: PropTypes.bool,
   leftDetail: PropTypes.node,
   linkTo: PropTypes.any,
   linkExact: PropTypes.bool,
   linkReplace: PropTypes.bool,
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   paddingHorizontal: PropTypes.string,
   size: PropTypes.string,
   showActiveArrow: PropTypes.bool,
   textColor: PropTypes.string,
   textFontFamily: PropTypes.string,
   textSize: PropTypes.string,
   textWeight: PropTypes.string
}

ListMenuButton.defaultProps = {
   activeBackgroundColor: 'rgba(0,0,0,0.04)',
   activeTextColor: '#333',
   activeTextWeight: 'bold',
   badgeNumber: undefined,
   borderRadius: '0px',
   isActive: undefined,
   leftDetail: undefined,
   linkTo: undefined,
   linkExact: false,
   linkReplace: false,
   onClick: undefined,
   paddingHorizontal: '18px',
   size: 'lg',
   showActiveArrow: false,
   textColor: '#666',
   textFontFamily: undefined,
   textSize: undefined,
   textWeight: 'medium'
}

export default ListMenuButton
