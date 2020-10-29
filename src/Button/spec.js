export default [{
   name: 'borderRadius',
   type: 'String',
   default: '4px',
   description: 'Set the border-radius of the button. By default, all buttons inherit their borderRadius from the <code>elementBorderRadius</code> prop set on the parent <code>OIO</code> container.',
   responsive: true
}, {
   name: 'children',
   type: 'node',
   default: '-',
   description: 'Nest <code>children</code> inside <code>Button</code> component. <code>children</code> will appear next to Button <code>name</code> (if set). Not visible when <code>mode</code> is set to <code>loading</code>',
   responsive: false
}, {
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the component',
   responsive: false
}, {
   name: 'color',
   type: 'String',
   default: '-',
   description: 'The primary button color (usually its background color). Pass any css compatible color value. By default, all buttons inherit their color from the <code>highlightColor</code> prop set on the parent <code>OIO</code> container.',
   responsive: true
}, {
   name: 'fontFamily',
   type: 'String',
   default: '-',
   description: 'Apply a specific font-family to the text within this component. By default, all buttons inherit the <code>fontFamily</code> set on the parent <code>OIO</code> container',
   responsive: true
}, {
   name: 'id',
   type: 'String',
   default: '-',
   description: '',
   responsive: false
}, {
   name: 'linkTo',
   type: 'Mixed',
   default: '-',
   description: 'Passed to <code>OIOProvider</code> button link adapater. See OIOProvider docs for details.',
   responsive: false
}, {
   name: 'linkReplace',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Passed to <code>OIOProvider</code> button link adapater. See OIOProvider docs for details.',
   responsive: false
}, {
   name: 'mode',
   type: 'String (Enum)',
   default: '<code>normal</code>',
   description: 'Availalble options include: <code>disabled</code>, <code>normal</code>, <code>pulsing</code>, <code>loading</code>.<br /><br /><b>Note</b>: When mode is set to <code>loading</code>, the <code>Button</code> will retain the same size were its <code>mode</code> set to <code>normal</code> (assuming <code>children</code> and <code>name</code> stay the same when the <code>children</code> changes to/from <code>loading</code>)',
   responsive: false
}, {
   name: 'name',
   type: 'String',
   default: '-',
   description: 'Text that appears inside the button. Not visible when <code>mode</code> is set to <code>loading</code>',
   responsive: false
}, {
   name: 'onClick',
   type: 'Function',
   default: '-',
   description: 'Function to execute on mouse click',
   responsive: false
}, {
   name: 'onMouseDown',
   type: 'Function',
   default: '-',
   description: 'Function to execute on mouse down',
   responsive: false
}, {
   name: 'outline',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code>, gives the button an outline appearance. The <code>textColor</code> attribute will not be applicable when <code>outline</code> is set to <code>true</code>',
   responsive: false
}, {
   name: 'padding',
   type: 'String',
   default: '-',
   description: 'Set the horizontal padding of the button',
   responsive: true
}, {
   name: 'rounded',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code>, gives the button a rounded pill-like appearance',
   responsive: false
}, {
   name: 'size',
   type: 'String (Enum)',
   default: '<code>md</code>',
   description: 'Set the <code>Button</code> component size. Available values include:  <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the <code>Button</code> component',
   responsive: false
}, {
   name: 'tagName',
   type: 'String',
   default: '<code>button</code>',
   description: 'Set <code>Button</code> component to render with alternate html tagName such as: a, div, span.',
   responsive: false
}, {
   name: 'textColor',
   type: 'String',
   default: '<code>#fff</code>',
   description: 'The color of the button&apos;s text. Pass any css compatible color value. This attribute is not applicable when the <code>outline</code> on <code>Button</code> component is set to <code>true</code>',
   responsive: true
}, {
   name: 'textSize',
   type: 'String',
   default: '<code>3</code>',
   description: 'Set the size of the text inside button using a number between <code>1-15</code>',
   responsive: true
}, {
   name: 'textTransform',
   type: 'String',
   default: '<code>none</code>',
   description: 'Set text transformations for Text. Any compatible css <code>text-transform</code> values are valid, including: <code>capitalize</code>, <code>initial</code>, <code>inherit</code>, <code>lowercase</code>, <code>none</code>, <code>uppercase</code>',
   responsive: true
}, {
   name: 'textWeight',
   type: 'String (Enum)',
   default: '<code>normal</code>',
   description: 'Valid values include: <code>light</code>, <code>normal</code>, <code>medium</code>, <code>semibold</code>, <code>bold</code>',
   responsive: true
}, {
   name: 'type',
   type: 'String (Enum)',
   default: '<code>button</code>',
   description: 'Can be one of: <code>button</code>, <code>clear</code> or <code>submit</code>. This attribute is only applicable if tagName is set as <code>button<code>',
   responsive: false
}, {
   name: 'width',
   type: 'String',
   default: '-',
   description: 'Set the <code>Button</code> to be a specific width',
   responsive: true
}]
