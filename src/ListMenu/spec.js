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
}, {
   name: 'showActiveMarker',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to show color marker on <code>ListMenuButton</code>s where <code>isActive</code> is set to <code>true</code>',
   responsive: false
}, {
   name: 'textColor',
   type: 'String',
   default: '<code>#666</code>',
   description: 'Text <code>color</code> of the <code>ListMenuButton</code> when <code>isActive</code> is set to <code>false</code>',
   responsive: false
}]
