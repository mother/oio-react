import React, { Component } from 'react'
import { Text } from '../../../src'
import style from '../../style.less'

export default class OIOContainer extends Component {
   render() {
      return (
         <div className={style.docs}>
            <h2>Text</h2>
            <div style={{ float: 'left', width: '100%' }}>
               <Text size="10">Size 10 Text</Text>
               <Text size="9">Size 9 Text</Text>
               <Text size="8">Size 8 Text</Text>
               <Text size="7">Size 7 Text</Text>
               <Text size="6">Size 6 Text</Text>
               <Text size="5">Size 5 Text</Text>
               <Text size="4">Size 4 Text</Text>
               <Text size="3">Size 3 Text</Text>
               <Text size="2">Size 2 Text</Text>
               <Text size="1">Size 1 Text</Text>
            </div>
            <div style={{ float: 'left', width: '100%' }}>
               <Text size="10" autoScale>Size 10 Text</Text>
               <Text size="9" autoScale>Size 9 Text</Text>
               <Text size="8" autoScale>Size 8 Text</Text>
               <Text size="7" autoScale>Size 7 Text</Text>
               <Text size="6" autoScale>Size 6 Text</Text>
               <Text size="5" autoScale>Size 5 Text</Text>
               <Text size="4" autoScale>Size 4 Text</Text>
               <Text size="3" autoScale>Size 3 Text</Text>
               <Text size="2" autoScale>Size 2 Text</Text>
               <Text size="1" autoScale>Size 1 Text</Text>
            </div>
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
                  <tr>
                     <td><b>autoScale</b></td>
                     <td>boolean</td>
                     <td><code>false</code></td>
                     <td>
                        When set to <code>true</code>, Text will scale dynamically proportionally
                         to the browser screen size
                     </td>
                  </tr>
                  <tr>
                     <td><b>className</b></td>
                     <td>String</td>
                     <td><code>&#123;&#125;</code></td>
                     <td>
                        Pass a
                        <code>className</code>
                        to customize className of the OIO Container
                     </td>
                  </tr>
                  <tr>
                     <td><b>color</b></td>
                     <td>String</td>
                     <td>-</td>
                     <td>
                        Pass any css compatible color string
                     </td>
                  </tr>
                  <tr>
                     <td><b>fontFamily</b></td>
                     <td>String</td>
                     <td><code>sans-serif</code></td>
                     <td>
                        Default font-family used for all text inside this OIO Container
                     </td>
                  </tr>
                  <tr>
                     <td><b>size</b></td>
                     <td>String</td>
                     <td><code>1</code></td>
                     <td>
                        Set the <code>Text</code> component size using a number between
                        <code>1-15</code>
                     </td>
                  </tr>
                  <tr>
                     <td><b>style</b></td>
                     <td>Object</td>
                     <td><code>&#123;&#125;</code></td>
                     <td>
                        Pass a style <code>object</code>
                         to customize inline style of the <code>Text</code> component
                     </td>
                  </tr>
                  <tr>
                     <td><b>uppercase</b></td>
                     <td>Boolean</td>
                     <td><code>false</code></td>
                     <td>
                        Set to <code>true</code> to transform text characters to uppercase
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}
