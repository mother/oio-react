export default [{
   name: 'children',
   type: 'Node',
   default: '-',
   description: '',
   responsive: false
}, {
   name: 'htmlFor',
   type: 'String',
   default: '-',
   description: 'Equivalent to the html <code>for</code> attribute',
   responsive: false
}, {
   name: 'required',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'When set to <code>true</code>, a red asterisk will be shown next to this component\'s label.',
   responsive: false
}, {
   name: 'Standard attributes',
   type: 'String',
   default: '-',
   description: 'In addition to the above properties, this component will also accept any attributes available to the standard <code>label</code> html element.',
   responsive: false
}]
