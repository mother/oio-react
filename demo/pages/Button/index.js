import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneForest } from 'react-syntax-highlighter/dist/styles/prism'
import { Button, Text } from '../../../src'
import style from '../../style.less'

const codeSnippet1 = `
// Text, sizes 1 to 15!

<Text size="15">Size 15 Text</Text>
<Text size="14">Size 14 Text</Text>
<Text size="13">Size 13 Text</Text>
<Text size="12">Size 12 Text</Text>
<Text size="11">Size 11 Text</Text>
<Text size="10">Size 10 Text</Text>
<Text size="9">Size 9 Text</Text>
<Text size="8">Size 8 Text</Text>
<Text size="7">Size 7 Text</Text>
<Text size="6">Size 6 Text</Text>
<Text size="5">Size 5 Text</Text>
<Text size="4">Size 4 Text</Text>
<Text size="3">Size 3 Text</Text>
<Text size="2">Size 2 Text</Text>
<Text size="1">Size 1 Text</Text>
`

const apiOptions = [{
   name: 'borderRadius',
   type: 'String',
   default: '4px',
   description: 'Set the border-radius of the button. By default, all buttons inherit their borderRadius from the <code>elementBorderRadius</code> prop set on the parent <code>OIO</code> container.'
}, {
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the component'
}, {
   name: 'color',
   type: 'String',
   default: '-',
   description: 'The primary button color (usually its background color). Pass any css compatible color value. By default, all buttons inherit their color from the <code>highlightColor</code> prop set on the parent <code>OIO</code> container.'
}, {
   name: 'fontFamily',
   type: 'String',
   default: '-',
   description: 'Apply a specific font-family to the text within this component. By default, all buttons inherit the <code>fontFamily</code> set on the parent <code>OIO</code> container'
}, {
   name: 'link',
   type: 'String',
   default: '-',
   description: 'If a link value is passed <code>Button</code> will trigger a <code>Route</code> change on click'
}, {
   name: 'name',
   type: 'String',
   default: '-',
   description: 'Text that appears inside the button'
}, {
   name: 'onClick',
   type: 'Function',
   default: '-',
   description: 'Function to execute on mouse click'
}, {
   name: 'outline',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code>, gives the button an outline appearance'
}, {
   name: 'rounded',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code>, gives the button a rounded pill-like appearance'
}, {
   name: 'size',
   type: 'String',
   default: '<code>3</code>',
   description: 'Set the <code>Text</code> component size using a number between <code>1-15</code>'
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the component'
}, {
   name: 'textColor',
   type: 'String',
   default: '<code>#fff</code>',
   description: 'The color of the button&apos;s text. Pass any css compatible color value.'
}, {
   name: 'textUppercase',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to transform text characters to uppercase. To set all buttons to have uppercase text, you can  set <code>buttonTextUppercase</code> to <code>true</code> on the parent <code>OIO</code> container'
}, {
   name: 'type',
   type: 'Enum',
   default: '<code>button</code>',
   description: 'Can be one of: <code>button</code>, <code>clear</code> or <code>submit</code>'
}, {
   name: 'width',
   type: 'String',
   default: '-',
   description: 'Set the <code>Button</code> to be a specific width'
}]

export default class OIOContainer extends Component {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="14" weight="medium">
                     Button
                  </Text>
                  <br />
                  <Text size="5" weight="medium">
                     The Basics: Name and Size
                  </Text>
                  <br />
                  <Text>
                     The text that appears in the <code>Button</code> component is set with the
                      prop <code>name</code>.
                     You can set the size of the <code>Button</code> component by using the
                      prop <code>size</code>
                      The default size for the Button component is <code>md</code>. Availalble
                       sizes are: <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <div style={{ float: 'left', display: 'block', width: '100%', marginBottom: '3px' }}>
                        <Button name="Button (lg)" size="lg" />
                     </div>
                     <div style={{ float: 'left', display: 'block', width: '100%', marginBottom: '3px' }}>
                        <Button name="Button (md)" size="md" />
                     </div>
                     <div style={{ float: 'left', display: 'block', width: '100%', marginBottom: '3px' }}>
                        <Button name="Button (sm)" size="sm" />
                     </div>
                     <div style={{ float: 'left', display: 'block', width: '100%', marginBottom: '3px' }}>
                        <Button name="Button (xs)" size="xs" />
                     </div>
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneForest}
                     customStyle={{ background: 'transparent' }}>
                     {codeSnippet1}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button Customizations: Add a little style and flavour
                  </Text>
                  <br />
                  <Text>
                     <p>
                        You can set customize both the background and text color of
                         the <code>Button</code> component by using the
                         prop <code>color</code> and <code>textColor</code>.
                     </p>
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <div style={{ float: 'left', display: 'block', width: '100%', marginBottom: '3px' }}>
                        <Button name="Button (no radius)" size="sm" borderRadius="0px" />
                        <Button name="Button uppercase" size="sm" textUppercase />
                        <Button name="Button Rounded" size="sm" rounded />
                        <Button name="Button (with width)" size="sm" width="300px" />
                        <Button name="Button with Color" size="sm" color="#3a3045" textColor="#b4435e" />
                        <Button name="Button Outline" size="sm" outline />
                     </div>
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneForest}
                     customStyle={{ background: 'transparent' }}>
                     {codeSnippet1}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button Color and Text Color
                  </Text>
                  <br />
                  <Text>
                     You can set customize both the background and text color of
                      the <code>Button</code> component by using the
                      prop <code>color</code> and <code>textColor</code>.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <div style={{ float: 'left', display: 'block', width: '100%', marginBottom: '3px' }}>
                        <Button name="Button Outline" color="#3a3045" textColor="#b4435e" />
                        <Button name="Button Rounded" color="#3a3045" textColor="#b4435e" rounded />
                     </div>
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneForest}
                     customStyle={{ background: 'transparent' }}>
                     {codeSnippet1}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="5" weight="medium">
                     Component API
                  </Text>
                  <br />
                  <br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="150px">Prop Type</th>
                           <th width="150px">Default Value</th>
                           <th>Description/Options</th>
                        </tr>
                     </thead>
                     <tbody>
                        {apiOptions.map(option => (
                           <tr key={option.name}>
                              <td><b>{option.name}</b></td>
                              <td>{option.type}</td>
                              <td>
                                 <div dangerouslySetInnerHTML={{ __html: option.default }} />
                              </td>
                              <td>
                                 <div dangerouslySetInnerHTML={{ __html: option.description }} />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      )
   }
}
