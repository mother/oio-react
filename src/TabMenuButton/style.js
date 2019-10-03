export default {
   tabButton: ({ highlightColor, isActive }) => ({
      float: 'left',
      height: '100%',
      color: isActive
         ? highlightColor
         : '#888',
      paddingTop: '4px',
      borderBottom: isActive
         ? `4px solid ${highlightColor}`
         : '4px solid transparent',
      transition: '300ms',
      cursor: 'pointer',
      '&:hover': {
         color: '#222'
      },
      '&:active': {
         transform: 'translate3d(0, -2px, 0)'
      },
      '.badge': {
         backgroundColor: isActive ? highlightColor : '#eee',
         color: isActive ? '#fff' : '#666'
      }
   })
}
