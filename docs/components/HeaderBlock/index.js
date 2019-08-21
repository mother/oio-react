import React from 'react'
import PropTypes from 'prop-types'
import { Spacer, Text, View } from '../../../src'
import style from './style.less'

const HeaderBlock = ({ title, subtitle }) => (
   <View
      className={style.headerBlock}
      display="flex"
      float="left"
      width="100%">
      <View
         float="left"
         width="100%[a-d] 50%[e-f]"
         padding="48px"
         borderBottom="1px solid rgba(0,0,0,0.1)">
         <Text size="10[a-d] 9[e] 10[f]" weight="medium">
            {title}
         </Text>
         {subtitle && (
            <div>
               <Spacer size="4" />
               <Text size="4" weight="light" lineHeight="130%">
                  <div dangerouslySetInnerHTML={{ __html: subtitle }} />
               </Text>
            </div>
         )}
      </View>
      <View
         display="none[a-d] block[e-f]"
         float="left"
         width="100%[a-d] 50%[e-f]"
         padding="30px"
         backgroundColor="#1e2124"
         borderBottom="1px solid #111"
      />
   </View>
)

HeaderBlock.propTypes = {
   subtitle: PropTypes.string,
   title: PropTypes.string.isRequired
}

HeaderBlock.defaultProps = {
   subtitle: undefined
}

export default HeaderBlock
