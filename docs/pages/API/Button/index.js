import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import buttonSpec from '../../../../src/Button/spec'
import ButtonChildrenSpecimen from '../../../specimens/ButtonChildren'
// import ButtonCustomizationsSpecimen from '../../../specimens/ButtonCustomizations'
import ButtonModesSpecimen from '../../../specimens/ButtonModes'
import ButtonSizesSpecimen from '../../../specimens/ButtonSizes'
import ButtonStylesSpecimen from '../../../specimens/ButtonStyles'
import { ButtonCustomizationsSpecimen } from '../../../specimens'
import style from '../style.less'

import Specimen from '../../../specimen'

export default class ButtonPage extends Component {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="10" weight="medium">
                     Button
                  </Text>
               </div>
            </div>






            <Specimen component={ButtonSizesSpecimen} />





            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button Customizations: Add a little style and flavour
                  </Text>
                  <br />
                  <Text>
                     <p>
                        You can set customize both the background and text color of
                         the <code>Button</code> component by using the
                         prop <code>color</code> and <code>textColor</code>.
                     </p>
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ButtonCustomizationsSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonCustomizationsSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button Color and Text Color
                  </Text>
                  <br />
                  <Text>
                     You can set customize both the background and text color of
                      the <code>Button</code> component by using the
                      prop <code>color</code> and <code>textColor</code>.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ButtonStylesSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonStylesSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button Modes
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ButtonModesSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonModesSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">
                     Button with Children
                  </Text>
                  <br />
                  <Text>
                     Nest <code>children</code> inside <code>Button</code> component.
                  </Text>
                  <br />
                  <br />
                  <div className={style.exampleContainer}>
                     <ButtonChildrenSpecimen />
                  </div>
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ButtonChildrenSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnFull}>
                  <Text size="5" weight="medium">
                     Component API
                  </Text>
                  <br />
                  <br />
                  <table className={style.table}>
                     <thead>
                        <tr>
                           <th width="150px">Prop</th>
                           <th width="150px">Prop Type</th>
                           <th width="150px">Default Value</th>
                           <th>Description/Options</th>
                        </tr>
                     </thead>
                     <tbody>
                        {buttonSpec.map(option => (
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
