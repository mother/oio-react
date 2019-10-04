export default [{
   name: 'activeBackgroundColor',
   type: 'String',
   default: '<code>rgba(0,0,0,0.04)</code>',
   description: '<code>backgroundColor</code> of the <code>ListMenuButton</code> when <code>isActive</code> is set to <code>true</code>',
   responsive: false
}, {
   name: 'activeTextColor',
   type: 'String',
   default: '<code>#333</code>',
   description: 'Text <code>color</code> of the <code>ListMenuButton</code> when <code>isActive</code> is set to <code>true</code>',
   responsive: false
}, {
   name: 'activeTextWeight',
   type: 'String',
   default: '<code>bold</code>',
   description: 'Text <code>fontWeight</code> of the <code>ListMenuButton</code> when <code>isActive</code> is set to <code>true</code>',
   responsive: false
}, {
   name: 'buttonBorderRadius',
   type: 'String',
   default: '-',
   description: 'Set <code>borderRadius</code> of all <code>ListMenuButton</code> components.',
   responsive: true
}, {
   name: 'buttonPaddingHorizontal',
   type: 'String',
   default: '-',
   description: 'Sets the left and right <code>padding</code> for all <code>ListMenuButton</code> components.',
   responsive: true
}, {
   name: 'buttonSize',
   type: 'String (Enum)',
   default: '<code>lg</code>',
   description: 'Set the <code>ListMenuButton</code> component size. Available values include:  <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>.',
   responsive: true
}, {
   name: 'buttonTextColor',
   type: 'String',
   default: '<code>#666</code>',
   description: 'Text <code>color</code> of the <code>ListMenuButton</code> when <code>isActive</code> is set to <code>false</code>',
   responsive: false
}, {
   name: 'buttonTextFontFamily',
   type: 'OIO Responsive String',
   default: '-',
   description: 'Set <code>fontFamily</code> for all <code>ListMenuButton</code> components.',
   responsive: true
}, {
   name: 'buttonTextSize',
   type: 'OIO Responsive String',
   default: '-',
   description: 'Set the size of the text inside <code>ListMenuButton</code> using a number between <code>1-15</code>. If no value is specified, text will be sized automatically based on the <code>ListMenuButton</code> <code>size</code>',
   responsive: true
}, {
   name: 'buttonTextWeight',
   type: 'OIO Responsive String',
   default: '-',
   description: 'Set the <code>fontWeight</code> of the text inside <code>ListMenuButton</code> when <code>isActive</code> is set to <code>false</code>',
   responsive: true
}, {
   name: 'dividerLineStyle',
   type: 'String',
   default: '<code>1px solid #eee</code>',
   description: 'Set the style for the line seperating the <code>ListMenuButton</code>s. Use a css compatible border values.',
   responsive: true
}, {
   name: 'showActiveArrow',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to show arrow icon on <code>ListMenuButton</code>s where <code>isActive</code> is set to <code>true</code>',
   responsive: false
}]
