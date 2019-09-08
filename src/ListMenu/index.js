import React from 'react'
import { View } from 'oio-react'
import PropTypes from 'prop-types'

const ListMenu = ({
   children,
   highlightColor,
   buttonBorderRadius,
   buttonPadding,
   dividerLineStyle,
   selectionBackgroundColor,
   showSelectionArrow,
   showSelectionMarker,
   textColor
}) => {
   // Clone TabButton children and pass props
   const listMenuButtons = React.Children.map(children, (child, i) => {
      // This is to handle the cases where if buttons are mapped, there may be null values
      if (child) {
         return (
            <>
               {React.cloneElement(child, {
                  highlightColor,
                  selectionBackgroundColor,
                  showSelectionArrow,
                  showSelectionMarker,
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
   children: PropTypes.node.isRequired,
   highlightColor: PropTypes.string,
   buttonBorderRadius: PropTypes.string,
   buttonPadding: PropTypes.string,
   dividerLineStyle: PropTypes.string,
   selectionBackgroundColor: PropTypes.string,
   showSelectionArrow: PropTypes.bool,
   showSelectionMarker: PropTypes.bool,
   textColor: PropTypes.string
}

ListMenu.defaultProps = {
   highlightColor: '#000',
   buttonBorderRadius: undefined,
   buttonPadding: undefined,
   dividerLineStyle: '1px solid #eee',
   selectionBackgroundColor: undefined,
   showSelectionArrow: false,
   showSelectionMarker: false,
   textColor: undefined
}

export default ListMenu
