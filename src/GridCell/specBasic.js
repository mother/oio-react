export default [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the <code>GridCell</code>',
   responsive: false
}, {
   name: 'colspan',
   type: 'String',
   default: '<code>1</code>',
   description: 'Number of columns that the cell will span across inside <code>Grid</code> component.',
   responsive: true
}, {
   name: 'id',
   type: 'String',
   default: '-',
   description: '',
   responsive: false
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the <code>GridCell</code> component',
   responsive: false
}]
