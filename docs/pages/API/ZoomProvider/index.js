import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import APITableBlock from '../../../components/APITableBlock'
import { Text } from '../../../../src'
import zoomProviderSpec from '../../../../src/ZoomProvider/spec'
import ZoomProviderSpecimen from '../../../specimens/ZoomProvider'
import style from '../style.less'

export default class ZoomProviderPage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">ZoomProvider</Text>
                  <br />
                  <Text>
                     {/* eslint-disable max-len */}
                     The <code>ZoomProvider</code> component will scale the following OIO components when nested: <code>Button</code>, <code>Grid</code>, <code>GridCell</code>, <code>Spacer</code>, <code>Text</code>, <code>View</code>.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <ZoomProviderSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {ZoomProviderSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <APITableBlock spec={zoomProviderSpec} title="ZoomProvider API Options" />
         </div>
      )
   }
}
