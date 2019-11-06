export default [{
   name: 'isActive',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to set <code>ListMenuButton</code> in active state.',
   responsive: false
}, {
   name: 'linkTo',
   type: 'Mixed',
   default: '-',
   description: 'Passed to <code>OIOProvider</code> button link adapater. See OIOProvider docs for details.',
   responsive: false
}, {
   name: 'linkExact',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Passed to <code>OIOProvider</code> button link adapater. See OIOProvider docs for details.',
   responsive: false
}, {
   name: 'linkReplace',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Passed to <code>OIOProvider</code> button link adapater. See OIOProvider docs for details.',
   responsive: false
}, {
   name: 'name',
   type: 'String',
   default: '-',
   description: 'Main text label that appears inside <code>ListMenuButton</code>.',
   responsive: false
}, {
   name: 'onClick',
   type: 'Function',
   default: '-',
   description: 'Function to execute on mouse click',
   responsive: false
}]
