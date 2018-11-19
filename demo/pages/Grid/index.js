import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneForest } from 'react-syntax-highlighter/dist/styles/prism'
import { Grid, GridCell, Text, View } from '../../../src'
import style from '../../style.less'

const codeSnippet1 = `
// All OIO components must be wrapped in an OIO Container
<Grid columns="2" spacing="12px">
   <GridCell>
      <View backgroundColor="#aaa">
         Cell 1
      </View>
   </GridCell>
   <GridCell>
      <View backgroundColor="#aaa">
         Cell 2
      </View>
   </GridCell>
   <GridCell colspan="2">
      <View backgroundColor="#aaa">
         Cell 3
      </View>
   </GridCell>
   <GridCell>
      <View backgroundColor="#aaa">
         Cell 4
      </View>
   </GridCell>
   <GridCell>
      <View backgroundColor="#aaa">
         Cell 5
      </View>
   </GridCell>
</Grid>
`

const apiOptions = [{
   name: 'className',
   type: 'String',
   default: '-',
   description: 'Pass a <code>className</code> to customize className of the OIO Container'
}, {
   name: 'fontFamily',
   type: 'String',
   default: '<code>sans-serf</code>',
   description: 'Default font-family used for all text inside this OIO Container'
}, {
   name: 'fontSize',
   type: 'String',
   default: '<code>16px</code>',
   description: 'Default font-size used inside this OIO container'
}, {
   name: 'style',
   type: 'Object',
   default: '<code>{}</code>',
   description: 'Pass a style <code>object</code> to customize inline style of the OIO Container'
}]

export default class OIOContainer extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">Grid</Text>
                  <br />
                  <Text size="5" weight="light">
                     To use OIO components, you must wrap all components inside a <code>OIO</code>
                      Container. <code>OIO</code> containers arer used to reuseable and cohesive
                        props to all components within its scope. <code>OIO</code>
                         containers can be nested.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <Grid columns="2" spacing="12px">
                        <GridCell>
                           <View backgroundColor="#aaa">
                              Cell 1
                           </View>
                        </GridCell>
                        <GridCell>
                           <View backgroundColor="#aaa">
                              Cell 2
                           </View>
                        </GridCell>
                        <GridCell colspan="2">
                           <View backgroundColor="#aaa">
                              Cell 3
                           </View>
                        </GridCell>
                        <GridCell>
                           <View backgroundColor="#aaa">
                              Cell 4
                           </View>
                        </GridCell>
                        <GridCell>
                           <View backgroundColor="#aaa">
                              Cell 5
                           </View>
                        </GridCell>
                     </Grid>
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
