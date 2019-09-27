export default [{
   name: 'align',
   type: 'String (Enum)',
   default: '<code>left</code>',
   description: 'Configure the alignment of the <code>TabMenuButton</code>s with <code>TabMenu</code>. Available options are: <code>left</code>, <code>center</code>, <code>right</code>',
   responsive: false
}, {
   name: 'buttonPaddingHorizontal',
   type: 'String',
   default: '-',
   description: 'Sets the left and right <code>padding</code> for all <code>TabMenuButton</code> components.',
   responsive: true
}, {
   name: 'buttonSize',
   type: 'String (Enum)',
   default: '<code>lg</code>',
   description: 'Set the <code>TabMenuButton</code> component size. Available values include:  <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>.',
   responsive: false
}, {
   name: 'buttonSpacing',
   type: 'String',
   default: '<code>0px</code>',
   description: 'Set spacing between <code>TabMenuButton</code> components.',
   responsive: true
}, {
   name: 'highlightColor',
   type: 'Boolean',
   default: '<code>#000</code>',
   description: 'The <code>highlightColor</code> includes the text and border color of the <code>TabMenuButton</code> that has <code>isActive</code> set to <code>true</code>',
   responsive: false
}, {
   name: 'paddingHorizontal',
   type: 'String',
   default: '<code>0px</code>',
   description: 'Set a left and right <code>padding</code> that for the whole <code>TabMenu</code> components.',
   responsive: false
}]
