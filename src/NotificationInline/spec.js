export default [{
   name: 'backgroundColor',
   type: 'OIO Responsive String ',
   default: '-',
   description: 'By default, if no <code>backgroundColor</code> is set, an appropriate <code>backgroundColor</code> is automatically set according to the declared <code>NotificationInline</code> <code>type</code>.',
   responsive: true
}, {
   name: 'borderRadius',
   type: 'OIO Responsive String ',
   default: '-',
   description: '',
   responsive: true
}, {
   name: 'buttonPlacement',
   type: 'String (Enum)',
   default: 'bottom',
   description: 'Determines the position of <code>buttons</code> (if present). Available values are: <code>bottom</code> and <code>right</code>',
   responsive: false
}, {
   name: 'buttons',
   type: 'array',
   default: '-',
   description: 'Pass an array of one or more <code>Button</code> components. See above example for usage.',
   responsive: false
}, {
   name: 'children',
   type: 'Node',
   default: '-',
   description: 'If <code>children</code> are passed, they will appear inline below the <code>NotificationInline</code>\'s message',
   responsive: false
}, {
   name: 'iconColor',
   type: 'OIOResponsiveString',
   default: '-',
   description: 'Specify the color of the icon. By default, if no <code>iconColor</code> is set, an appropriate <code>iconColor</code> is automatically set according to the declared <code>NotificationInline</code> <code>type</code>.',
   responsive: true
}, {
   name: 'iconSpacing',
   type: 'OIOResponsiveString',
   default: '<code>18px</code>',
   description: 'Set the spacing between the component\'s icon and text content',
   responsive: true
}, {
   name: 'iconSize',
   type: 'OIOResponsiveString',
   default: '<code>18px</code>',
   description: 'Sets both the width and height of the icon',
   responsive: true
}, {
   name: 'id',
   type: 'String',
   default: '-',
   description: '',
   responsive: false
}, {
   name: 'message',
   type: 'String',
   default: '-',
   description: 'The body text right below the <code>title</code>',
   responsive: false
}, {
   name: 'paddingHorizontal',
   type: 'OIOResponsiveString',
   default: '24px',
   description: 'The component\'s left and right padding',
   responsive: true
}, {
   name: 'paddingVertical',
   type: 'OIOResponsiveString',
   default: '18px',
   description: 'The component\'s top and bottom padding',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '-',
   description: 'Pass a style <code>object</code> to customize inline style of the component',
   responsive: false
}, {
   name: 'textColor',
   type: 'OIOResponsiveString',
   default: '-',
   description: 'This prop will set the text color for both <code>title</code> and <code>message</code>.  By default, if no <code>textColor</code> is set, an appropriate <code>textColor</code> is automatically set according to the declared <code>NotificationInline</code> <code>type</code>.',
   responsive: true
}, {
   name: 'textSize',
   type: 'OIOResponsiveString',
   default: '2',
   description: 'This prop will set the text size for both <code>title</code> and <code>message</code>',
   responsive: true
}, {
   name: 'title',
   type: 'String',
   default: '-',
   description: 'Primary text heading',
   responsive: false
}, {
   name: 'type',
   type: 'String (Enum)',
   default: '-',
   description: 'Available values include: <code>info</code>,<code>loading</code>, <code>prompt</code>, <code>success</code>, <code>warning</code> and <code>error</code>',
   responsive: false
}]
