export default [{
   name: 'appearance',
   type: 'String (Enum)',
   default: '-',
   description: 'This value can be one of: <code>outline</code> or <code>plain</code>. <br /><br />By default, the appearance of the component is set through the value of the nearest <code>OIOProvider</code>\'s <code>formElementAppearance</code> prop. If the <code>appearance</code> prop is set on this component, it will take precedence over the <code>appearance</code> value provided by the <code>OIOProvider</code>.',
   responsive: false
}, {
   name: 'highlightColor',
   type: 'String',
   default: '-',
   description: 'By default, the <code>highlightColor</code> of the component is set through the value of the nearest <code>OIOProvider</code>\'s <code>highlightColor</code> prop. If the <code>highlightColor</code> prop is set on this component, it will take precedence over the <code>highlightColor</code> value provided by the <code>OIOProvider</code>.',
   responsive: false
}, {
   name: 'id',
   type: 'String',
   default: '-',
   description: '',
   responsive: false
}, {
   name: 'label',
   type: 'String',
   default: '-',
   description: 'Text label to display next to Checkbox',
   responsive: false
}, {
   name: 'Standard attributes',
   type: 'String',
   default: '-',
   description: 'In addition to the above properties, this component will also accept any attributes available to the standard <code>input type="checkbox"</code> html element.',
   responsive: false
}]
