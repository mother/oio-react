import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import ViewBasicSpecimen from '../../../specimens/ViewBasic'
import style from '../style.less'

const apiOptions = [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIO Container',
   responsive: false
}, {
   name: 'display',
   type: 'String',
   default: '<code>block</code>',
   description: 'Any css block options can be used including: <code>block</code>, <code>flex</code>, <code>inline-block</code>',
   responsive: true
}, {
   name: 'float',
   type: 'String',
   default: '-',
   description: 'Any css float options can be used including: <code>left</code>, <code>right</code>',
   responsive: true
}, {
   name: 'position',
   type: 'String',
   default: '<code>relative</code>',
   description: 'Any css position options can be used including: <code>relative</code>, <code>absolute</code>, <code>fixed</code>',
   responsive: true
}, {
   name: 'top',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'left',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'right',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'bottom',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'height',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'maxHeight',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'maxWidth',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'minHeight',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'minWidth',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'width',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the OIO Container',
   responsive: false
}, {
   name: 'zIndex',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}]

const appearanceApiOptions = [{
   name: 'backgroundColor',
   type: 'String',
   default: '-',
   description: 'Use any valid css color',
   responsive: true
}, {
   name: 'backgroundImage',
   type: 'String',
   default: '-',
   description: 'specifiy a background image',
   responsive: true
}, {
   name: 'backgroundPosition',
   type: 'String',
   default: '-',
   description: 'Use valid CSS <code>background-position</code> values',
   responsive: true
}, {
   name: 'backgroundSize',
   type: 'String',
   default: '-',
   description: 'Use valid CSS <code>background-size</code> values',
   responsive: true
}, {
   name: 'border',
   type: 'String',
   default: '-',
   description: 'Use css format, ie: <code>1px solid red</code>',
   responsive: true
}, {
   name: 'borderBottom',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'borderLeft',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'borderRight',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'borderTop',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'boxShadow',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'textAlign',
   type: 'String',
   default: '-',
   description: 'options: <code>left</code>, <code>center</code>, <code>right</code>',
   responsive: true
}]

const flexboxApiOptions = [{
   name: 'flex',
   type: 'String',
   default: '-',
   description: 'flexbox property for flexbox container children',
   responsive: true
}, {
   name: 'flexFlow',
   type: 'String',
   default: '-',
   description: 'flexbox property',
   responsive: true
}, {
   name: 'justifyContent',
   type: 'String',
   default: '-',
   description: 'flexbox property',
   responsive: true
}, {
   name: 'alignItems',
   type: 'String',
   default: '-',
   description: 'flexbox property',
   responsive: true
}, {
   name: 'order',
   type: 'String',
   default: '-',
   description: 'flexbox order property',
   responsive: true
}]

const paddingMarginApiOptions = [{
   name: 'padding',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding</code> values',
   responsive: true
}, {
   name: 'paddingBottom',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-bottom</code> values. If used in conjunction with <code>padding</code>, the <code>paddingBottom</code> value will take precedent over the <code>padding-bottom</code> value of <code>padding</code>.',
   responsive: true
}, {
   name: 'paddingHorizontal',
   type: 'String',
   default: '-',
   description: 'This is equivalent to setting <code>paddingLeft</code> and <code>paddingRight</code> simultaneously. If used in conjunction with any other padding props, <code>paddingHorizontal</code> will take precedent over all the <code>padding-left</code> and <code>padding-right</code> values provided by other padding props.',
   responsive: true
}, {
   name: 'paddingLeft',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-left</code> values. If used in conjunction with <code>padding</code>, the <code>paddingLeft</code> value will take precedent over the <code>padding-left</code> value of <code>padding</code>.',
   responsive: true
}, {
   name: 'paddingRight',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-right</code> values. If used in conjunction with <code>padding</code>, the <code>paddingRight</code> value will take precedent over the <code>padding-right</code> value of <code>padding</code>.',
   responsive: true
}, {
   name: 'paddingTop',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-top</code> values. If used in conjunction with <code>padding</code>, the <code>paddingTop</code> value will take precedent over the <code>padding-top</code> value of <code>padding</code>.',
   responsive: true
}, {
   name: 'paddingVertical',
   type: 'String',
   default: '-',
   description: 'This is equivalent to setting <code>paddingTop</code> and <code>paddingBottom</code> simultaneously. If used in conjunction with any other padding props, <code>paddingVertical</code> will take precedent over all the <code>padding-top</code> and <code>padding-bottom</code> values provided by other padding props.',
   responsive: true
}, {
   name: 'margin',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin</code> values',
   responsive: true
}, {
   name: 'marginBottom',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-bottom</code> values. If used in conjunction with <code>margin</code>, the <code>marginBottom</code> value will take precedent over the <code>margin-bottom</code> value of <code>margin</code>.',
   responsive: true
}, {
   name: 'marginLeft',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-left</code> values. If used in conjunction with <code>margin</code>, the <code>marginLeft</code> value will take precedent over the <code>margin-left</code> value of <code>margin</code>.',
   responsive: true
}, {
   name: 'marginRight',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-right</code> values. If used in conjunction with <code>margin</code>, the <code>marginRight</code> value will take precedent over the <code>margin-right</code> value of <code>margin</code>.',
   responsive: true
}, {
   name: 'marginTop',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-top</code> values. If used in conjunction with <code>margin</code>, the <code>marginTop</code> value will take precedent over the <code>margin-top</code> value of <code>margin</code>.',
   responsive: true
}]

export default class ViewPage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">View</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The View component is probably one of the most important components within OIO. It is the core OIO component you should use to structure your pages, layouts and components for your application. You can think of the <code>View</code> component as OIO&apos;s take on a <code>div</code> with easily accessible css properties.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ViewBasicSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ViewBasicSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="6" weight="bold">Basic Formatting API Options</Text>
                  <br /><br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="90px">Prop Type</th>
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
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="6" weight="bold">Appearance API Options</Text>
                  <br /><br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="90px">Prop Type</th>
                           <th width="150px">Default Value</th>
                           <th>Description/Options</th>
                           <th>Responsive</th>
                        </tr>
                     </thead>
                     <tbody>
                        {appearanceApiOptions.map(option => (
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
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="6" weight="bold">FlexBox API Options</Text>
                  <br /><br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="90px">Prop Type</th>
                           <th width="150px">Default Value</th>
                           <th>Description/Options</th>
                           <th>Responsive</th>
                        </tr>
                     </thead>
                     <tbody>
                        {flexboxApiOptions.map(option => (
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
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="6" weight="bold">Padding and Margin API Options</Text>
                  <br /><br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="90px">Prop Type</th>
                           <th width="150px">Default Value</th>
                           <th>Description/Options</th>
                           <th>Responsive</th>
                        </tr>
                     </thead>
                     <tbody>
                        {paddingMarginApiOptions.map(option => (
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
