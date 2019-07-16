import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import NotificationInlineCustomizedSpecimen from '../../../specimens/NotificationInlineCustomized'
import NotificationInlineTypesSpecimen from '../../../specimens/NotificationInlineTypes'
import style from '../style.less'

const apiOptions = [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIO Container',
   responsive: false
}]

export default class NotificationInlinePage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">NotificationInline</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The View component is probably one of the most important components within OIO. It is the core OIO component you should use to structure your pages, layouts and components for your application. You can think of the <code>View</code> component as OIO&apos;s take on a <code>div</code> with easily accessible css properties.
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
                  <Text>
                     {/* eslint-disable max-len */}
                     Sometimes, you might want to have text that scales proportionally to the current browser window size. This is especially useful for larger text elements like titles and headings. <br /><br /> You can make the <code>Text</code> component scale proportionally by setting the prop <code>autoScale</code> to <code>true</code>. Resize your browser window and you can see how the text below scales accordingly.
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
