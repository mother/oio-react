import React from 'react'
import { Text, View } from 'oio-react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import ArrowRightIcon from 'assets/icons/arrowRight'
import style from './style'

const ListMenuButton = ({
   badgeNumber,
   body,
   borderRadius,
   exact,
   highlightColor,
   icon,
   metaInfo,
   name,
   onClick,
   padding,
   selectionBackgroundColor,
   showSelectionArrow,
   showSelectionMarker,
   textColor,
   to
}) => {
   // TODO: THIS SHOULD NOT BE MERGED IN.
   // SHOULD NOT HAVE "TO" PROP
   const Element = to ? NavLink : 'div'
   let linkProps = null

   if (to) {
      linkProps = {
         exact,
         to,
         activeClassName: style.listMenuButtonSelected(
            highlightColor,
            selectionBackgroundColor,
            showSelectionMarker
         )
      }
   }

   return (
      <Element
         {...linkProps}
         onClick={onClick}
         className={style.listMenuButton(
            borderRadius,
            showSelectionMarker,
            textColor
         )}>
         <View
            display="flex"
            justifyContent="space-between"
            alignItems="fill"
            float="left"
            width="100%"
            padding={padding}>
            {icon && (
               <View
                  flex="0 0 auto"
                  display="flex"
                  alignItems={(body) ? 'flex-start' : 'center'}>
                  {icon}
               </View>
            )}
            <View
               flex="1 1 auto"
               display="flex"
               alignItems={(body) ? 'flex-start' : 'center'}>
               <div>
                  <Text size="2" weight="medium">
                     {name}
                  </Text>
                  {body && (
                     <Text size="1" style={{ opacity: 0.6 }}>
                        {body}
                     </Text>
                  )}
               </div>
            </View>
            <View
               flex="0 0 auto"
               display="flex"
               alignItems={(body) ? 'flex-start' : 'center'}>
               {badgeNumber && (
                  <View
                     flex="0 0 auto"
                     display="flex"
                     height="18px"
                     className="badge"
                     justifyContent="center"
                     alignItems="center"
                     padding="0 9px"
                     marginLeft="18px"
                     borderRadius="12px">
                     <Text size="1" weight="medium">
                        {badgeNumber}
                     </Text>
                  </View>
               )}
               {metaInfo && (
                  <View
                     flex="0 0 auto"
                     display="flex"
                     height="18px"
                     marginLeft="18px"
                     justifyContent="center"
                     alignItems="center">
                     <Text size="1" style={{ opacity: 0.6 }}>
                        {metaInfo}
                     </Text>
                  </View>
               )}
            </View>
            {showSelectionArrow && (
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
      </Element>
   )
}

ListMenuButton.propTypes = {
   badgeNumber: PropTypes.number,
   body: PropTypes.string,
   borderRadius: PropTypes.string,
   exact: PropTypes.bool,
   highlightColor: PropTypes.string,
   icon: PropTypes.element,
   metaInfo: PropTypes.string,
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   padding: PropTypes.string,
   selectionBackgroundColor: PropTypes.string,
   showSelectionArrow: PropTypes.bool,
   showSelectionMarker: PropTypes.bool,
   textColor: PropTypes.string,
   to: PropTypes.string
}

ListMenuButton.defaultProps = {
   badgeNumber: undefined,
   body: undefined,
   borderRadius: '0px',
   exact: undefined,
   highlightColor: '#000',
   icon: undefined,
   metaInfo: undefined,
   onClick: undefined,
   padding: '15px 18px',
   selectionBackgroundColor: 'rgba(0,0,0,0.04)',
   showSelectionArrow: false,
   showSelectionMarker: false,
   textColor: '#666',
   to: undefined
}

export default ListMenuButton
