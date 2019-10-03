export default [{
   name: 'arrowOffsetFromTop',
   type: 'String',
   default: '<code>50%</code>',
   description: 'The distance from the top of the <code>Carousel</code> component that the previous and next arrows appear. You can use any valid css unit. It is recommended to use either a <code>%</code> or <code>px</code> based value.',
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
