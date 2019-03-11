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
   description: 'Pass a <code>className</code> to customize className of the OIO Container'
}, {
   name: 'display',
   type: 'String',
   default: '<code>block</code>',
   description: 'Any css block options can be used including: <code>block</code>, <code>flex</code>, <code>inline-block</code>'
}, {
   name: 'float',
   type: 'String',
   default: '-',
   description: 'Any css float options can be used including: <code>left</code>, <code>right</code>'
}, {
   name: 'position',
   type: 'String',
   default: '<code>relative</code>',
   description: 'Any css position options can be used including: <code>relative</code>, <code>absolute</code>, <code>fixed</code>'
}, {
   name: 'top',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'left',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'right',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'bottom',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'height',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'maxHeight',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'maxWidth',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'minHeight',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'minWidth',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'width',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the OIO Container'
}, {
   name: 'zIndex',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}]

const appearanceApiOptions = [{
   name: 'backgroundColor',
   type: 'String',
   default: '-',
   description: 'Use any valid css color'
}, {
   name: 'backgroundImage',
   type: 'String',
   default: '-',
   description: 'specifiy a background imagee'
}, {
   name: 'backgroundPosition',
   type: 'String',
   default: '-',
   description: 'Use valid CSS <code>background-position</code> values'
}, {
   name: 'backgroundSize',
   type: 'String',
   default: '-',
   description: 'Use valid CSS <code>background-size</code> values'
}, {
   name: 'border',
   type: 'String',
   default: '-',
   description: 'Use css format, ie: <code>1px solid red</code>'
}, {
   name: 'borderBottom',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'borderLeft',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'borderRight',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'borderTop',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'boxShadow',
   type: 'String',
   default: '-',
   description: 'css equivalent value'
}, {
   name: 'textAlign',
   type: 'String',
   default: '-',
   description: 'options: <code>left</code>, <code>center</code>, <code>right</code>'
}]

const flexboxApiOptions = [{
   name: 'flex',
   type: 'String',
   default: '-',
   description: 'flexbox property for flexbox container children'
}, {
   name: 'flexFlow',
   type: 'String',
   default: '-',
   description: 'flexbox property'
}, {
   name: 'justifyContent',
   type: 'String',
   default: '-',
   description: 'flexbox property'
}, {
   name: 'alignItems',
   type: 'String',
   default: '-',
   description: 'flexbox property'
}, {
   name: 'order',
   type: 'String',
   default: '-',
   description: 'flexbox order property'
}]

const paddingMarginApiOptions = [{
   name: 'padding',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding</code> values'
}, {
   name: 'paddingBottom',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-bottom</code> values'
}, {
   name: 'paddingHorizontal',
   type: 'String',
   default: '-',
   description: 'This is equivalent to setting <code>paddingLeft</code> and <code>paddingRight</code> simultaneously'
}, {
   name: 'paddingLeft',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-left</code> values'
}, {
   name: 'paddingRight',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-right</code> values'
}, {
   name: 'paddingTop',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>padding-top</code> values'
}, {
   name: 'paddingVertical',
   type: 'String',
   default: '-',
   description: 'This is equivalent to setting <code>paddingTop</code> and <code>paddingBottom</code> simultaneously'
}, {
   name: 'margin',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin</code> values'
}, {
   name: 'marginBottom',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-bottom</code> values'
}, {
   name: 'marginLeft',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-left</code> values'
}, {
   name: 'marginRight',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-right</code> values'
}, {
   name: 'marginTop',
   type: 'String',
   default: '-',
   description: 'Pass any valid css <code>margin-top</code> values'
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
