import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from '../../src'
import OIOContext from '../OIOProvider/context'

const ListMenu = ({
   activeBackgroundColor,
   activeTextColor,
   activeTextWeight,
   children,
   buttonBorderRadius,
   buttonPaddingHorizontal,
   buttonSize,
   buttonTextColor,
   buttonTextFontFamily,
   buttonTextSize,
   buttonTextWeight,
   dividerLineStyle,
   showActiveArrow
}) => {
   const { buttonLinkAdapter } = useContext(OIOContext)
   let linkHasAlreadyMatched = false

   // Clone ListMenuButton children and pass props
   const listMenuButtons = React.Children.map(children, (child, i) => {
      // This is to handle the cases where if buttons are mapped, there may be null values
      if (child) {
         // Determine if child should have active link (if applicable)
         let childIsActive = child.props.isActive
         if (!linkHasAlreadyMatched && child.props.linkTo && typeof childIsActive === 'undefined') {
            childIsActive = buttonLinkAdapter.isActive(child.props.linkTo, child.props.linkExact)
            if (childIsActive) {
               linkHasAlreadyMatched = true
            }
         }

         return (
            <React.Fragment>
               {React.cloneElement(child, {
                  activeBackgroundColor,
                  activeTextColor,
                  activeTextWeight,
                  showActiveArrow,
                  borderRadius: buttonBorderRadius,
                  paddingHorizontal: buttonPaddingHorizontal,
                  size: buttonSize,
                  textColor: buttonTextColor,
                  textFontFamily: buttonTextFontFamily,
                  textSize: buttonTextSize,
                  textWeight: buttonTextWeight,
                  isActive: childIsActive || false
               })}
               {i < (children.length - 1) && (
                  <View
                     float="left"
                     width="100%"
                     height="1px"
                     borderTop={dividerLineStyle}
                  />
               )}
            </React.Fragment>
         )
      }

      return null
   })

   return (
      <View float="left" width="100%">
         {listMenuButtons}
      </View>
   )
}

ListMenu.propTypes = {
   activeBackgroundColor: PropTypes.string,
   activeTextColor: PropTypes.string,
   activeTextWeight: PropTypes.string,
   children: PropTypes.node.isRequired,
   buttonBorderRadius: PropTypes.string,
   buttonPaddingHorizontal: PropTypes.string,
   buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
   buttonTextColor: PropTypes.string,
   buttonTextFontFamily: PropTypes.string,
   buttonTextSize: PropTypes.string,
   buttonTextWeight: PropTypes.string,
   dividerLineStyle: PropTypes.string,
   showActiveArrow: PropTypes.bool
}

ListMenu.defaultProps = {
   activeBackgroundColor: 'rgba(0,0,0,0.04)',
   activeTextColor: '#333',
   activeTextWeight: undefined,
   buttonBorderRadius: undefined,
   buttonPaddingHorizontal: undefined,
   buttonSize: 'lg',
   buttonTextColor: '#666',
   buttonTextFontFamily: undefined,
   buttonTextSize: undefined,
   buttonTextWeight: undefined,
   dividerLineStyle: '1px solid #eee',
   showActiveArrow: false
}

export default ListMenu
