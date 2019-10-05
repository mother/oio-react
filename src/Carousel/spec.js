export default [{
   name: 'buttonBackgroundColor',
   type: 'OIO Responsive String',
   default: '<code>#fff</code>',
   description: 'The <code>backgroundColor</code> of the previous and next arrow buttons.',
   responsive: true
}, {
   name: 'buttonIconColor',
   type: 'String',
   default: '<code>#555</code>',
   description: 'The <code>color</code> of the arrow icon inside the previous and next buttons.',
   responsive: false
}, {
   name: 'buttonIconSize',
   type: 'String',
   default: '<code>12px</code>',
   description: 'The width and height of the arrow icon inside the previous and next buttons.',
   responsive: false
}, {
   name: 'buttonIconStrokeWidth',
   type: 'String',
   default: '<code>4px</code>',
   description: 'The <code>strokeWidth</code> of the arrow icon inside the previous and next buttons.',
   responsive: false
}, {
   name: 'buttonOffsetFromSides',
   type: 'OIO Responsive String',
   default: '<code>-12px[a] -24px[b-f]</code>',
   description: 'The distance from the left and right sides of the <code>Carousel</code> component that the previous and next arrow buttons appear. You can use any valid css unit.',
   responsive: true
}, {
   name: 'buttonOffsetFromTop',
   type: 'String',
   default: '<code>calc(50% - 18px)[a] calc(50% - 24px)[b-f]</code>',
   description: 'The distance from the top of the <code>Carousel</code> component that the previous and next arrow buttons appear. You can use any valid css unit. It is recommended to use either a <code>%</code> or <code>px</code> based value.',
   responsive: false
}, {
   name: 'buttonSize',
   type: 'String',
   default: '<code>36px[a] 48px[b-f]</code>',
   description: 'The width and height of the previous and next arrow buttons.',
   responsive: false
}, {
   name: 'numSlidesPerPane',
   type: 'OIO Responsive String',
   default: '<code>1</code>',
   description: 'Number of slides per sliding pane that are visible within <code>Carousel</code> at a given moment.',
   responsive: true
}, {
   name: 'onRotate',
   type: 'Function',
   default: '-',
   description: 'Function that will fire when Carousel slides between previous and next panes. <code>(currentPaneIndex, totalNumPanes) => ...</code>',
   responsive: false
}, {
   name: 'spacing',
   type: 'Number',
   default: '<code>12</code>',
   description: 'The spacing between <code>Carousel</code> slides. Currently, this prop must be a pixel-based value and is not responsive.',
   responsive: false
}]
