export default {
   listMenuButton: ({
      activeBackgroundColor,
      activeTextColor,
      borderRadius,
      isActive,
      textColor
   }) => ({
      color: isActive
         ? activeTextColor
         : textColor,
      backgroundColor: isActive
         ? activeBackgroundColor
         : 'transparent',
      transition: '100ms',
      cursor: 'pointer',
      '&:hover': {
         backgroundColor: isActive
            ? activeBackgroundColor
            : 'rgba(0,0,0,0.02)'
      },
      '&:active': {
         transform: 'translate3d(2px, 0, 0)'
      },
      '.arrow': {
         display: isActive ? 'block' : 'none'
      }
   })
}
