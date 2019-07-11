import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import FormSpecimen from '../../../specimens/Form'
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
   name: 'opacity',
   type: 'Object',
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
   name: 'transform',
   type: 'Object',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'transition',
   type: 'Object',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}, {
   name: 'zIndex',
   type: 'String',
   default: '-',
   description: 'css equivalent value',
   responsive: true
}]

export default class FormPage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">Forms</Text>
                  <br />
                  <Text size="3" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     The View component is probably one of the most important components within OIO. It is the core OIO component you should use to structure your pages, layouts and components for your application. You can think of the <code>View</code> component as OIO&apos;s take on a <code>div</code> with easily accessible css properties.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <FormSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {FormSpecimen.codeSnippet}
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
         </div>
      )
   }
}
