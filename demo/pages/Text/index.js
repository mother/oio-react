import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneForest } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../src'
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

const codeSnippet2 = `
// Text with autoScale

<Text size="9" color="#111" weight="medium" autoScale>
   Salmon Leek Pasta
</Text>
<Text size="3" autoScale>
   For cozy winter nights
</Text>
`

const codeSnippet3 = `
// Text weights

<Text size="6" weight="bold">Hot Apple Cider (Bold)</Text>
<Text size="6" weight="semibold">Hot Apple Cider (Semibold)</Text>
<Text size="6" weight="medium">Hot Apple Cider (Medium)</Text>
<Text size="6" weight="normal">Hot Apple Cider (Normal)</Text>
<Text size="6" weight="light">Hot Apple Cider (Light)</Text>
`

const apiOptions = [{
   name: 'autoScale',
   type: 'Boolean',
   default: 'false',
   description: 'When set to <code>true</code>, text will scale dynamically proportionally to the browser screen size'
}, {
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the component'
}, {
   name: 'color',
   type: 'String',
   default: '-',
   description: 'Pass any css compatible color value'
}, {
   name: 'fontFamily',
   type: 'String',
   default: '-',
   description: 'Apply a specific font-family to the text within this component'
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
   name: 'uppercase',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to transform text characters to uppercase'
}]

export default class TextPage extends Component {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="14" weight="medium">
                     Text
                  </Text>
                  <br />
                  <Text size="5" weight="medium">
                     Text Sizes
                  </Text>
                  <br />
                  <Text>
                     You can set the size of the <code>Text</code> component by using the
                      prop <code>size</code>
                      The default size for the Text component is <code>3</code>.
                       As a general guideline, when using multiple text sizes,
                        it recommended to use sizes at least 3 size units apart (ie. 3,6,9).
                         This helps create better legebility and visual hierarchy.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
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
                     Text Sizes with Autoscale
                  </Text>
                  <br />
                  <Text>
                     Sometimes, you might want to have text that scales proportionally to
                      the current browser window size. This is especially useful for larger text
                       elements like titles and headings.
                     <br /><br />
                        You can make the <code>Text</code> component
                        scale proportionally by setting the prop <code>autoScale</code>
                         to <code>true</code>. Resize your browser window and you can see how
                          the text below scales accordingly.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <Text size="9" color="#111" weight="medium" autoScale>Salmon Leek Pasta</Text>
                     <Text size="3" autoScale>For cozy winter nights</Text>
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneForest}
                     customStyle={{ background: 'transparent' }}>
                     {codeSnippet2}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Text Weights
                  </Text>
                  <br />
                  <Text>
                     Sometimes, you might want to have text that scales proportionally to
                      the current browser window size. This is especially useful for larger text
                       elements like titles and headings.
                     <br /><br />
                        You can make the <code>Text</code> component
                        scale proportionally by setting the prop <code>autoScale</code>
                         to <code>true</code>. Resize your browser window and you can see how
                          the text below scales accordingly.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <Text size="6" weight="bold">Hot Apple Cider (Bold)</Text>
                     <Text size="6" weight="semibold">Hot Apple Cider (Semibold)</Text>
                     <Text size="6" weight="medium">Hot Apple Cider (Medium)</Text>
                     <Text size="6" weight="normal">Hot Apple Cider (Normal)</Text>
                     <Text size="6" weight="light">Hot Apple Cider (Light)</Text>
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneForest}
                     customStyle={{ background: 'transparent' }}>
                     {codeSnippet3}
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
