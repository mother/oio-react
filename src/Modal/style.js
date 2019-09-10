import { keyframes } from '@emotion/core'

const animations = {
   close: {
      fadeOut: {
         baseStyle: 'opacity: 1;',
         keyframes: keyframes`
           0% { opacity: 1; }
           100% { opacity: 0; }
         `
      },
      scaleOut: {
         baseStyle: 'transform: translate3d(0, 18px, 0) scale(0.99); opacity: 0;',
         keyframes: keyframes`
           0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
           100% { transform: translate3d(0, 18px, 0) scale(0.99); opacity: 0; }
         `
      },
      moveToRight: {
         baseStyle: 'transform: translate3d(10%, 0, 0); opacity: 0;',
         keyframes: keyframes`
            0% { transform: translate3d(0, 0, 0); opacity: 1; }
            100% { transform: translate3d(10%, 0, 0); opacity: 0; }
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
      moveFromBottom: {
         baseStyle: '',
         keyframes: keyframes`
           0% { transform: translate3d(0, 10%, 0); }
           100% { transform: translate3d(0, 0, 0); }
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
