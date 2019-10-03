export default [{
   name: 'badgeNumber',
   type: 'Number',
   default: '-',
   description: 'Set a <code>badgeNumber</code> to show a number-based badge that will appear on the right side of the <code>TabMenuButton</code>',
   responsive: false
}, {
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
   name: 'linkReplace',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Passed to <code>OIOProvider</code> button link adapater. See OIOProvider docs for details.',
   responsive: false
}, {
   name: 'name',
   type: 'String',
   default: '-',
   description: 'Main text label that appears inside <code>TabMenuButton</code>.',
   responsive: false
}, {
   name: 'onClick',
   type: 'Function',
   default: '-',
   description: 'Function to execute on mouse click',
   responsive: false
}]
