export default [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the <code>Spacer</code> component',
   responsive: false
}, {
   name: 'orientation',
   type: 'String (Enum)',
   default: '-',
   description: 'Available values are: <code>horizontal</code> and <code>vertical</code>',
   responsive: false
}, {
   name: 'size',
   type: 'OIO Responsive String',
   default: '-',
   description: 'This value can be any integer larger than <code>1</code>. The <code>Spacer</code>\'s real calculated size is effectively <code>6px</code> multiplied by this <code>size</code> value. (ie. a <code>Spacer</code> of size <code>3</code> will have a real size of 18 pixels)',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style',
   responsive: false
}]
