import React from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Spacer, Text, View } from '../../../src'
import style from './style.less'

const SpecimenBlock = ({ specimen }) => {
   const Specimen = specimen
   return (
      <View
         display="block[a-d] flex[e-f]"
         float="left"
         width="100%">
         <View
            className={style.textColumn}
            float="left"
            width="100%[a-d] 50%[e-f]"
            padding="48px[a-d] 36px 48px[e-f]"
            borderBottom="1px solid rgba(0,0,0,0.1)">
            <Text size="4" weight="medium">
               {specimen.title}
            </Text>
            {specimen.description && (
               <View>
                  <Spacer size="1" />
                  <Text size="2" color="#555">
                     <div
                        dangerouslySetInnerHTML={{
                           __html: specimen.description
                        }}
                     />
                  </Text>
               </View>
            )}
            <br />
            {typeof Specimen === 'function' && <Specimen />}
         </View>
         <View
            className={style.codeColumn}
            float="left"
            width="100%[a-d] 50%[e-f]"
            padding="18px 30px"
            backgroundColor="#1e2124"
            borderBottom="1px solid #111">
            <Text size="1" fontFamily="Monaco" lineHeight="150%">
               <SyntaxHighlighter
                  language="jsx"
                  style={duotoneEarth}
                  customStyle={{ background: 'transparent' }}>
                  {specimen.codeSnippet}
               </SyntaxHighlighter>
            </Text>
         </View>
      </View>
   )
}

SpecimenBlock.propTypes = {
   specimen: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
   ]).isRequired
}

export default SpecimenBlock
