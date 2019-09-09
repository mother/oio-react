export default {
   listMenuButton: ({
      activeTextColor,
      borderRadius,
      isActive,
      selectionBackgroundColor,
      showSelectionMarker,
      textColor
   }) => ({
      float: 'left',
      width: '100%',
      color: isActive
         ? activeTextColor
         : textColor,
      backgroundColor: isActive
         ? selectionBackgroundColor
         : 'transparent',
      borderRadius,
      borderLeft: showSelectionMarker
         ? '5px solid transparent'
         : 'none',
      transition: '100ms',
      cursor: 'pointer',
      '&:hover': {
         backgroundColor: isActive
            ? selectionBackgroundColor
            : 'rgba(0,0,0,0.02)',
         color: '#444'
      },
      '&:active': {
         transform: 'translate3d(2px, 0, 0)'
      },
      '.badge': {
         backgroundColor: 'rgba(0,0,0,0.05)'
      },
      '.arrow': {
         display: isActive ? 'block' : 'none'
      }
   })
}
