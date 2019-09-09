export default [{
   name: 'autoScale',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'When set to <code>true</code>, text will scale dynamically proportionally to the browser screen size',
   responsive: true
}, {
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the component',
   responsive: false
}, {
   name: 'color',
   type: 'String',
   default: '-',
   description: 'Pass any css compatible color value',
   responsive: true
}, {
   name: 'fontFamily',
   type: 'String',
   default: '-',
   description: 'Apply a specific font-family to the text within this component',
   responsive: true
}, {
   name: 'letterSpacing',
   type: 'String',
   default: '<code>0</code>',
   description: 'Set letter-spacing for Text. Any compatible css letter-spacing values are valid',
   responsive: true
}, {
   name: 'lineHeight',
   type: 'String',
   default: '<code>120%</code>',
   description: 'Set line-height for Text. Any compatible css line-height values are valid',
   responsive: true
}, {
   name: 'size',
   type: 'String',
   default: '<code>3</code>',
   description: 'Set the <code>Text</code> component size using any number. While you may use decimal numbers, it is recommended that whole numbers are used for visual consistency.',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the component',
   responsive: false
}, {
   name: 'transform',
   type: 'String',
   default: '<code>none</code>',
   description: 'Set text transformations for Text. Any compatible css <code>text-transform</code> values are valid, including: <code>capitalize</code>, <code>initial</code>, <code>inherit</code>, <code>lowercase</code>, <code>none</code>, <code>uppercase</code>',
   responsive: true
}, {
   name: 'weight',
   type: 'String',
   default: '<code>normal</code>',
   description: 'Valid values include: <code>light</code>, <code>normal</code>, <code>medium</code>, <code>semibold</code>, <code>bold</code>',
   responsive: true
}]
