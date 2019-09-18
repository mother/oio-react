import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from '../../src'
import OIOContext from '../OIOProvider/context'

const ListMenu = ({
   activeBackgroundColor,
   activeTextColor,
   children,
   buttonBorderRadius,
   buttonPaddingHorizontal,
   buttonSize,
   dividerLineStyle,
   showActiveArrow,
   textColor
}) => {
   const { buttonLinkAdapter } = useContext(OIOContext)
   let linkHasAlreadyMatched = false

   // Clone ListMenuButton children and pass props
   const listMenuButtons = React.Children.map(children, (child, i) => {
      let childIsActive = child.props.isActive
      if (!linkHasAlreadyMatched && child.props.linkTo && typeof childIsActive === 'undefined') {
         childIsActive = buttonLinkAdapter.isActive(child.props.linkTo)
         if (childIsActive) {
            linkHasAlreadyMatched = true
         }
      }

      // This is to handle the cases where if buttons are mapped, there may be null values
      if (child) {
         return (
            <React.Fragment>
               {React.cloneElement(child, {
                  activeBackgroundColor,
                  activeTextColor,
                  showActiveArrow,
                  textColor,
                  borderRadius: buttonBorderRadius,
                  paddingHorizontal: buttonPaddingHorizontal,
                  size: buttonSize,
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
   children: PropTypes.node.isRequired,
   buttonBorderRadius: PropTypes.string,
   buttonPaddingHorizontal: PropTypes.string,
   buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
   dividerLineStyle: PropTypes.string,
   showActiveArrow: PropTypes.bool,
   textColor: PropTypes.string
}

ListMenu.defaultProps = {
   activeBackgroundColor: 'rgba(0,0,0,0.04)',
   activeTextColor: '#333',
   buttonBorderRadius: undefined,
   buttonPaddingHorizontal: undefined,
   buttonSize: 'lg',
   dividerLineStyle: '1px solid #eee',
   showActiveArrow: false,
   textColor: '#666'
}

export default ListMenu
