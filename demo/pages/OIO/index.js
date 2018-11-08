import React, { Component } from 'react'
import style from '../../style.less'

export default class OIOContainer extends Component {
   render() {
      return (
         <div className={style.docs}>
            <h2>OIO Container</h2>
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
                     <td>
                        <b>className</b>
                     </td>
                     <td>String</td>
                     <td>
                        <code>&#123;&#125;</code>
                     </td>
                     <td>
                        Pass a
                        <code>className</code>
                        to customize className of the OIO Container
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <b>fontFamily</b>
                     </td>
                     <td>String</td>
                     <td>
                        <code>sans-serif</code>
                     </td>
                     <td>
                        Default font-family used for all text inside this OIO Container
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <b>fontSize</b>
                     </td>
                     <td>String</td>
                     <td>
                        <code>16px</code>
                     </td>
                     <td>
                        Default font-size used inside this OIO container
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <b>style</b>
                     </td>
                     <td>Object</td>
                     <td>
                        <code>&#123;&#125;</code>
                     </td>
                     <td>
                        Pass a style
                        <code>object</code>
                        to customize inline style of the OIO Container
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}
