export default [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIO Container',
   responsive: false
}, {
   name: 'columns',
   type: 'String',
   default: '<code>12</code>',
   description: 'Number of <code>GridCell</code> components that will fit in one row',
   responsive: true
}, {
   name: 'spacing',
   type: 'String',
   default: '<code>18px</code>',
   description: 'spacing between <code>GridCell</code> components',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the <code>Grid</code> component',
   responsive: false
}]
