import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import ButtonChildrenSpecimen from '../../../specimens/ButtonChildren'
import ButtonCustomizationsSpecimen from '../../../specimens/ButtonCustomizations'
import ButtonModesSpecimen from '../../../specimens/ButtonModes'
import ButtonSizesSpecimen from '../../../specimens/ButtonSizes'
import ButtonStylesSpecimen from '../../../specimens/ButtonStyles'
import style from '../style.less'

const apiOptions = [{
   name: 'borderRadius',
   type: 'String',
   default: '4px',
   description: 'Set the border-radius of the button. By default, all buttons inherit their borderRadius from the <code>elementBorderRadius</code> prop set on the parent <code>OIO</code> container.',
   responsive: true
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
   name: 'mode',
   type: 'Enum',
   default: '-',
   description: 'Availalble options include: <code>disabled</code>, <code>normal</code>, <code>pulsing</code>, <code>loading</code>',
   responsive: true
}, {
   name: 'name',
   type: 'String',
   default: '-',
   description: 'Text that appears inside the button',
   responsive: true
}, {
   name: 'onClick',
   type: 'Function',
   default: '-',
   description: 'Function to execute on mouse click',
   responsive: false
}, {
   name: 'outline',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code>, gives the button an outline appearance',
   responsive: true
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
   responsive: true
}, {
   name: 'size',
   type: 'Enum',
   default: '<code>3</code>',
   description: 'Set the <code>Button</code> component size. Available values include:  <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the <code>Button</code> component',
   responsive: true
}, {
   name: 'textColor',
   type: 'String',
   default: '<code>#fff</code>',
   description: 'The color of the button&apos;s text. Pass any css compatible color value.',
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
   type: 'Enum',
   default: '<code>normal</code>',
   description: 'Valid values include: <code>light</code>, <code>normal</code>, <code>medium</code>, <code>semibold</code>, <code>bold</code>',
   responsive: true
}, {
   name: 'type',
   type: 'Enum',
   default: '<code>button</code>',
   description: 'Can be one of: <code>button</code>, <code>clear</code> or <code>submit</code>',
   responsive: true
}, {
   name: 'width',
   type: 'String',
   default: '-',
   description: 'Set the <code>Button</code> to be a specific width',
   responsive: true
}]

export default class OIOContainer extends Component {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="10" weight="medium">
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
                     <ButtonSizesSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonSizesSpecimen.codeSnippet}
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
                     <ButtonCustomizationsSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonCustomizationsSpecimen.codeSnippet}
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
                     <ButtonStylesSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonStylesSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button Modes
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ButtonModesSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonModesSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button with Children
                  </Text>
                  <br />
                  <Text>
                     Nest <code>children</code> inside <code>Button</code> component.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ButtonChildrenSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonChildrenSpecimen.codeSnippet}
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
                              <td>
                                 {option.responsive ? <div>Yes</div> : <div>No</div>}
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
