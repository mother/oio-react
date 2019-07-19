import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../src'
import style from './pages/API/style.less'

const Specimen = ({ component }) => {
   return (
      <div className={style.block}>
         <div className={style.columnHalfText}>
            <Text size="5" weight="medium">
               {component.title}
            </Text>
            <br />
            <Text>
               <p dangerouslySetInnerHTML={{ __html: component.description }} />
            </Text>
            <br />
            <br />
            <div className={style.exampleContainer}>
               {component}
            </div>
         </div>
         <div className={style.columnHalfCode}>
            <SyntaxHighlighter
               language="jsx"
               style={duotoneEarth}
               customStyle={{ background: 'transparent' }}>
               {component.codeSnippet}
            </SyntaxHighlighter>
         </div>
      </div>
   )
}

export default Specimen
