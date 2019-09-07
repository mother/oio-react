export default [{
   name: 'backgroundColor',
   type: 'OIO Responsive String',
   default: '<code>#fff</code>',
   description: 'css equivalent value. This is the <code>backgroundColor</code> of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'boxShadow',
   type: 'OIO Responsive String',
   default: '<code>0px 3px 30px rgba(0,0,0,0.25)</code>',
   description: 'css equivalent value. This is the <code>boxShadow</code> color of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'closeAnimationDuration',
   type: 'Number',
   default: '<code>200</code>',
   description: 'Duration of the animation for <code>Modal</code> window closing',
   responsive: false
}, {
   name: 'closeAnimationName',
   type: 'String (Enum)',
   default: '<code>scaleOut</code>',
   description: 'Available values include: <code>fadeOut</code>, <code>scaleOut</code>, <code>moveToRight</code>',
   responsive: false
}, {
   name: 'height',
   type: 'OIO Responsive String',
   default: '<code>auto</code>',
   description: 'css equivalent value. This is the <code>height</code> of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'margin',
   type: 'OIO Responsive String',
   default: '<code>0px</code>',
   description: 'css equivalent value. This is the <code>margin</code> around the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'maxHeight',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>maxHeight</code> of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'maxWidth',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>maxWidth</code> of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'minHeight',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>minHeight</code> of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'minWidth',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>minWidth</code> of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'onClose',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Modal</code> begins closing.',
   responsive: false
}, {
   name: 'onCloseComplete',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Modal</code> closing animation is finished.',
   responsive: false
}, {
   name: 'onCloseTrigger',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Modal</code> overlay is clicked',
   responsive: false
}, {
   name: 'onOpen',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Modal</code> begins opening',
   responsive: false
}, {
   name: 'onOpenComplete',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Modal</code> opening animation is finished.',
   responsive: false
}, {
   name: 'open',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to make <code>Modal</code> visible. Set to <code>false</code> to close.',
   responsive: false
}, {
   name: 'openAnimationDuration',
   type: 'Number',
   default: '<code>400</code>',
   description: 'Duration of the animation for <code>Modal</code> window opening',
   responsive: false
}, {
   name: 'openAnimationName',
   type: 'String (Enum)',
   default: '<code>scaleOut</code>',
   description: 'Available values include: <code>appear</code>, <code>fadeIn</code>, <code>moveFromBottom</code>, <code>scaleIn</code>',
   responsive: false
}, {
   name: 'overlayBackgroundColor',
   type: 'OIO Responsive String',
   default: '<code>rgba(0,0,0,0.4)</code>',
   description: 'css equivalent value. This is the <code>backgroundColor</code> of the <code>Modal</code> overlay.',
   responsive: true
}, {
   name: 'shouldPropagatePointerEvents',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> for rare cases when you want the user to be able to interact with content sitting behind the modal',
   responsive: false
}, {
   name: 'width',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the width of the <code>Modal</code> window.',
   responsive: true
}, {
   name: 'zIndex',
   type: 'OIO Responsive String',
   default: '<code>10000</code>',
   description: 'css equivalent value. This is the zIndex of the entire <code>Modal</code> component.',
   responsive: true
}]
