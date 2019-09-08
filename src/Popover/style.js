import { keyframes } from '@emotion/core'

const animations = {
   close: {
      fadeOut: {
         baseStyle: 'opacity: 1;',
         keyframes: keyframes`
           0% { opacity: 1; }
           100% { opacity: 0; }
         `
      }
   },
   open: {
      appear: {
         baseStyle: '',
         keyframes: keyframes`
            0% { opacity: 0; transform: translate3d(0, -9px, 0) scale(0.99); }
            50% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
            100% { opacity: 1; }
         `
      },
      fadeIn: {
         baseStyle: '',
         keyframes: keyframes`
           0% { opacity: 0; }
           100% { opacity: 1; }
         `
      },
      scaleIn: {
         baseStyle: '',
         keyframes: keyframes`
           0% { transform: translate3d(0, 18px, 0) scale(0.99); }
           100% { transform: translate3d(0, 0, 0) scale(1); }
         `
      }
   }
}

export default {
   overlay: (({ animationType, animationDuration }) => {
      const animationName = animationType === 'open'
         ? animations.open.fadeIn
         : animations.close.fadeOut

      return ({
         animation: `${animationName.keyframes} ${animationDuration} ease`
      })
   }),
   window: (({ animationType, animationName, animationDuration }) => ({
      ...animations[animationType][animationName].baseStyle,
      animation: `${animations[animationType][animationName].keyframes} ${animationDuration} ease`
   }))
}
