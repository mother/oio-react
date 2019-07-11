import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import spacerSpec from '../../../../src/Spacer/spec'
import SpacerHorizontalSpecimen from '../../../specimens/SpacerHorizontal'
import SpacerVerticalSpecimen from '../../../specimens/SpacerVertical'
import style from '../style.less'

export default class SpacerPage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">Spacer</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The Spacer component provides a convenient way to create whitespace between elements. The <code>Spacer</code> component is designed to work in both <code>vertical</code> and <code>horizontal</code> orientations.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <Text size="5" weight="medium">Horizontal Orientation</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The following example shows <code>Spacer</code> component used in <code>horizontal</code> <code>orientation</code>. When the <code>Spacer</code> component is in this orientation, it flows as an html element with <code>display</code>set to <code>block</code>. Note that the sibling <code>View</code> components in this exmample, <code>display</code> is set to <code>block</code>.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <SpacerHorizontalSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {SpacerHorizontalSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">Vertical Orientation</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The following example shows <code>Spacer</code> component used in <code>vertical</code> <code>orientation</code>. When the <code>Spacer</code> component is in this orientation, it flows like an html element with <code>display</code> set to <code>inline-block</code>. Note that the sibling <code>View</code> components in this exmample, <code>display</code> is set to <code>inline-block</code>.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <SpacerVerticalSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {SpacerVerticalSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="6" weight="bold">Spacer API Options</Text>
                  <br /><br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="240px">Prop Type</th>
                           <th width="150px">Default Value</th>
                           <th>Description/Options</th>
                           <th>Responsive</th>
                        </tr>
                     </thead>
                     <tbody>
                        {spacerSpec.map(option => (
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
