export default [{
   name: 'anchorElement',
   type: 'DOM Element',
   default: '<code>document.body</code>',
   description: 'A valid DOM element that the popover is attached to',
   responsive: false
}, {
   name: 'anchorOriginHorizontal',
   type: 'String (Enum)',
   default: '<code>left</code>',
   description: 'Available values include: <code>left</code>, <code>right</code>.',
   responsive: false
}, {
   name: 'anchorOriginVertical',
   type: 'String (Enum)',
   default: '<code>top</code>',
   description: 'Available values include: <code>bottom</code>, <code>top</code>.',
   responsive: false
}, {
   name: 'backgroundColor',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css compatible value. This is the <code>backgroundColor</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'boxShadow',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css compatible value. This is the <code>boxShadow</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'borderRadius',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css compatible value',
   responsive: true
}, {
   name: 'closeAnimationDuration',
   type: 'Number',
   default: '<code>200</code>',
   description: 'Duration of the animation for <code>Popover</code> window closing',
   responsive: false
}, {
   name: 'closeAnimationName',
   type: 'String (Enum)',
   default: '<code>fadeOut</code>',
   description: 'Available values include: <code>fadeOut</code>',
   responsive: false
}, {
   name: 'height',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css compatible value. This is the <code>height</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'margin',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css compatible value. This is the <code>margin</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'maxHeight',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>maxHeight</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'maxWidth',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>maxWidth</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'minHeight',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>minHeight</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'minWidth',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the <code>minWidth</code> of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'onBodyClick',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when body is clicked. This is a good place to set a function to close the <code>Popover</code>.',
   responsive: false
}, {
   name: 'onClose',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Popover</code> begins closing.',
   responsive: false
}, {
   name: 'onCloseComplete',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Popover</code> closing animation is finished.',
   responsive: false
}, {
   name: 'onOpen',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Popover</code> begins opening',
   responsive: false
}, {
   name: 'onOpenComplete',
   type: 'Function',
   default: '-',
   description: 'Function that will be called when <code>Popover</code> opening animation is finished.',
   responsive: false
}, {
   name: 'open',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to make <code>Popover</code> visible. Set to <code>false</code> to close.',
   responsive: false
}, {
   name: 'openAnimationDuration',
   type: 'Number',
   default: '<code>400</code>',
   description: 'Duration of the animation for <code>Popover</code> window opening',
   responsive: false
}, {
   name: 'openAnimationName',
   type: 'String (Enum)',
   default: '<code>fadeIn</code>',
   description: 'Available values include: <code>appear</code>, <code>fadeIn</code>',
   responsive: false
}, {
   name: 'width',
   type: 'OIO Responsive String',
   default: '-',
   description: 'css equivalent value. This is the width of the <code>Popover</code> window.',
   responsive: true
}, {
   name: 'zIndex',
   type: 'OIO Responsive String',
   default: '<code>10001</code>',
   description: 'css equivalent value. This is the zIndex of the entire <code>Popover</code> component.',
   responsive: true
}]
