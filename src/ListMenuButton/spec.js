export default [{
   name: 'isActive',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to set <code>ListMenuButton</code> in active state.',
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