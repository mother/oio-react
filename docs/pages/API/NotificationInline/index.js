import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import spec from '../../../../src/NotificationInline/spec'
import NotificationInlineCustomizedSpecimen from '../../../specimens/NotificationInlineCustomized'
import NotificationInlineTypesSpecimen from '../../../specimens/NotificationInlineTypes'
import style from '../style.less'

export default class NotificationInlinePage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="8" weight="medium">NotificationInline</Text>
                  <br />
                  <Text size="5" weight="medium">
                     Basic Usage
                  </Text>
                  <br />
                  <Text size="3">
                     {/* eslint-disable max-len */}
                     The <code>NotificationInline</code> component is a message or alert designed to flow inline with other content. It comes in 6 different types: <code>info</code>, <code>loading</code>, <code>prompt</code>, <code>success</code>, <code>warning</code> and <code>error</code>. Setting the <code>type</code> will also automatically set the component&apos;s icon, <code>backgroundColor</code>, <code>iconColor</code> and <code>textColor</code>. In basic usage, you can set the <code>title</code> and <code>message</code> of the notification. More customization options are shown in the examples below.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <NotificationInlineTypesSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {NotificationInlineTypesSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     NotificationInline (with customizations)
                  </Text>
                  <br />
                  <Text size="3">
                     {/* eslint-disable max-len */}
                     For advanced use-cases, you can customize the <code>NotificationInline</code> component&apos;s <code>backgroundColor</code>, <code>iconColor</code>, <code>textColor</code>, provide <code>buttons</code> as well as pass additional content through <code>children</code>. Content passed through <code>children</code> will appear below the <code>NotificationInline</code> <code>message</code>. You can also set the placement of the <code>buttons</code> with the <code>buttonPlacement</code> prop.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <NotificationInlineCustomizedSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {NotificationInlineCustomizedSpecimen.codeSnippet}
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
                        {spec.map(option => (
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
