export default [{
   name: 'highlightColor',
   type: 'String',
   default: '-',
   description: 'By default, the <code>highlightColor</code> of the component is set through the value of the nearest <code>OIOProvider</code>\'s <code>highlightColor</code> prop. If the <code>highlightColor</code> prop is set on this component, it will take precedence over the <code>highlightColor</code> value provided by the <code>OIOProvider</code>.',
   responsive: false
}, {
   name: 'Standard attributes',
   type: 'String',
   default: '-',
   description: 'In addition to the above properties, this component will also accept any attributes available to the standard <code>input type="checkbox"</code> html element.',
   responsive: false
}]
