export default [{
   name: 'buttonLinkAdapter',
   type: 'Object',
   default: '-',
   description: 'See below'
}, {
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIOProvider'
}, {
   name: 'fontFamily',
   type: 'String',
   default: '<code>sans-serif</code>',
   description: 'Default font-family used for all text inside this OIOProvider'
}, {
   name: 'fontSize',
   type: 'String',
   default: '<code>16px</code>',
   description: 'Default font-size used inside this OIOProvider component'
}, {
   name: 'id',
   type: 'String',
   default: '<code>oio-container-{timestamp}</code>',
   description: 'Container DOM Element ID'
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a <code>style</code> object to customize inline style of the OIOProvider'
}]
