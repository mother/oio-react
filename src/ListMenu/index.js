import React from 'react'
import PropTypes from 'prop-types'
import View from '../View'

const ListMenu = ({
   activeBackgroundColor,
   activeTextColor,
   children,
   buttonBorderRadius,
   buttonPadding,
   dividerLineStyle,
   showActiveArrow,
   showActiveMarker,
   textColor
}) => {
   // Clone TabButton children and pass props
   const listMenuButtons = React.Children.map(children, (child, i) => {
      // This is to handle the cases where if buttons are mapped, there may be null values
      if (child) {
         return (
            <>
               {React.cloneElement(child, {
                  activeBackgroundColor,
                  activeTextColor,
                  showActiveArrow,
                  showActiveMarker,
                  textColor,
                  borderRadius: buttonBorderRadius,
                  padding: buttonPadding
               })}
               {i < (children.length - 1) && (
                  <View
                     float="left"
                     width="100%"
                     height="1px"
                     borderTop={dividerLineStyle}
                  />
               )}
            </>
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
   highlightColor: PropTypes.string,
   buttonBorderRadius: PropTypes.string,
   buttonPadding: PropTypes.string,
   dividerLineStyle: PropTypes.string,
   showActiveArrow: PropTypes.bool,
   showActiveMarker: PropTypes.bool,
   textColor: PropTypes.string
}

ListMenu.defaultProps = {
   activeBackgroundColor: 'rgba(0,0,0,0.04)',
   activeTextColor: '#333',
   highlightColor: '#000',
   buttonBorderRadius: undefined,
   buttonPadding: undefined,
   dividerLineStyle: '1px solid #eee',
   showActiveArrow: false,
   showActiveMarker: false,
   textColor: undefined
}

export default ListMenu
