export default {
   arrowButton: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px[a] 48px[b-f]',
      height: '36px[a] 48px[b-f]',
      backgroundColor: '#fff',
      borderRadius: '50%',
      boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
      transition: '200ms',
      css: {
         cursor: 'pointer',
         outline: 'none',
         transform: 'scale(1)',
         '&:hover': {
            backgroundColor: '#fff',
            transform: 'scale(1.05)',
            boxShadow: '4px 4px 18px rgba(0,0,0,0.2)'
         },
         '&:active': {
            backgroundColor: '#f3f3f3',
            transform: 'scale(0.95)'
         }
      }
   }
}
