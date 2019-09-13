export default [{
   name: 'animationDuration',
   type: 'Number',
   default: '<code>600</code>',
   description: 'Duration of the animation for a notification banner as it animates in and out.',
   responsive: false
}, {
   name: 'notificationDisplayDuration',
   type: 'Number',
   default: '<code>3500</code>',
   description: 'Duration that a notification banner appears visible before animating out.',
   responsive: false
}, {
   name: 'zIndex',
   type: 'Number',
   default: '<code>10001</code>',
   description: 'css equivalent value. This is the zIndex of the entire <code>NotificationManagerProvider</code> component.',
   responsive: false
}]
