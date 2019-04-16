import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import GridBasicSpecimen from '../../../specimens/GridBasic'
import { Text } from '../../../../src'
import style from '../style.less'

const gridApiOptions = [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIO Container',
   responsive: false
}, {
   name: 'columns',
   type: 'String',
   default: '<code>12</code>',
   description: 'Number of <code>GridCell</code> components that will fit in one row',
   responsive: true
}, {
   name: 'spacing',
   type: 'String',
   default: '<code>18px</code>',
   description: 'spacing between <code>GridCell</code> components',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the <code>Grid</code> component',
   responsive: false
}]

const gridCellApiOptions = [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIO Container',
   responsive: false
}, {
   name: 'colspan',
   type: 'String',
   default: '<code>1</code>',
   description: 'Number of columns that the cell will span across inside <code>Grid</code> component.',
   responsive: true
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the <code>GridCell</code> component',
   responsive: false
}]

export default class OIOContainer extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">Grid</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The OIO Grid component is designed to help organize layout content. The <code>Grid</code> component has 2 key props: <code>columns</code> and <code>spacing</code>. The <code>columns</code> prop determines the number of <code>GridCell</code> components that will fit horizontally in a row. The <code>spacing</code> prop determines the space between each <code>GridCell</code>. <code>GridCell</code> components can span multiple columns (similar to the <code>colspan</code> attribute for html table cells).
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <GridBasicSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {GridBasicSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="5" weight="medium">
                     Grid Component API
                  </Text>
                  <br />
                  <br />
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
                        {gridApiOptions.map(option => (
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
                  <br />
                  <br />
                  <Text size="5" weight="medium">
                     GridCell Component API
                  </Text>
                  <br />
                  <br />
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
                        {gridCellApiOptions.map(option => (
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