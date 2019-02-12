import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import TextAutoScaleSpecimen from '../../../specimens/TextAutoScale'
import TextColorSpecimen from '../../../specimens/TextColor'
import TextSizesSpecimen from '../../../specimens/TextSizes'
import TextWeightsSpecimen from '../../../specimens/TextWeights'
import style from '../style.less'

const apiOptions = [{
   name: 'autoScale',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'When set to <code>true</code>, text will scale dynamically proportionally to the browser screen size',
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
   description: 'Pass any css compatible color value',
   responsive: true
}, {
   name: 'fontFamily',
   type: 'String',
   default: '-',
   description: 'Apply a specific font-family to the text within this component',
   responsive: true
}, {
   name: 'lineHeight',
   type: 'String',
   default: '120%',
   description: 'Set line-height for Text. Any compatible css line-height values are valid',
   responsive: true
}, {
   name: 'size',
   type: 'String',
   default: '<code>3</code>',
   description: 'Set the <code>Text</code> component size using any number. While you may use decimal numbers, it is recommended that whole numbers are used for visual consistency.',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the component',
   responsive: false
}, {
   name: 'uppercase',
   type: 'Boolean',
   default: '<code>false</code>',
   description: 'Set to <code>true</code> to transform text characters to uppercase',
   responsive: false
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
                     {/* eslint-disable max-len */}
                     You can set the size of the <code>Text</code> component by using the prop <code>size</code>. The default size for the Text component is <code>3</code>. As a general guideline, when using multiple text sizes, it recommended to use sizes at least 3 size units apart (ie. 3,6,9). This helps create better legebility and visual hierarchy.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <TextSizesSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {TextSizesSpecimen.codeSnippet}
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
                     {/* eslint-disable max-len */}
                     Sometimes, you might want to have text that scales proportionally to the current browser window size. This is especially useful for larger text elements like titles and headings. <br /><br /> You can make the <code>Text</code> component scale proportionally by setting the prop <code>autoScale</code> to <code>true</code>. Resize your browser window and you can see how the text below scales accordingly.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <TextAutoScaleSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {TextAutoScaleSpecimen.codeSnippet}
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
                     {/* eslint-disable max-len */}
                     You can set the weight of the <code>Text</code> component by using the prop <code>weight</code>. The default weight for the Text component is <code>normal</code>.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <TextWeightsSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {TextWeightsSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Text Color
                  </Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     You can set the color of the <code>Text</code> component by using the prop <code>color</code>. Any css compatible color values are valid.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <TextColorSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {TextColorSpecimen.codeSnippet}
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
                           <th>Responsive</th>
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
