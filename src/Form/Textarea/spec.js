export default [{
   name: 'appearance',
   type: 'String (Enum)',
   default: '-',
   description: 'This value can be one of: <code>outline</code>, <code>plain</code> or <code>underline</code>. <br /><br />By default, the appearance of the component is set through the value of the nearest <code>Form</code>\'s <code>elementAppearance</code> prop. If the <code>appearance</code> prop is set on this component, it will take precedence over the <code>appearance</code> value provided by the <code>Form</code>.',
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
   description: 'Text label to display next to <code>Input</code>',
   responsive: false
}, {
   name: 'required',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'When set to <code>true</code>, a red asterisk will be shown next to this component\'s label.',
   responsive: false
}, {
   name: 'size',
   type: 'String (Enum)',
   default: '<code>sm</code>',
   description: 'This value can be one of: <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code> or <code>xs</code>. This will automatically set the component\'s font size.',
   responsive: false
}, {
   name: 'Standard attributes',
   type: 'String',
   default: '-',
   description: 'In addition to the above properties, this component will also accept any attributes available to the standard <code>textarea</code> html element.',
   responsive: false
}]
