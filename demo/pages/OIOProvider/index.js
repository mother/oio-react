import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneForest } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../src'
import style from '../../style.less'

const codeSnippet1 = `
// All OIO components must be wrapped in an OIOProvider
const myComponent = () => (
   <OIOProvider>
      <Text>
         Hello World
      </Text>
   </OIOProvider>
)`

const apiOptions = [{
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
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a <code>style</code> object to customize inline style of the OIOProvider'
}]

export default class OIOProviderPage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">OIOProvider</Text>
                  <br />
                  <Text size="5" weight="light">
                     To use OIO components, you must wrap all components inside
                      a <code>OIOProvider</code> component. <code>OIOProvider</code> components
                       are used to propagate reuseable and cohesive
                        props to all components within its scope. <code>OIOProvider</code>
                         components can be nested.
                  </Text>
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
         </div>
      )
   }
}
