import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Text, View } from '../../src'
import style from './style'

// =======================================================
// Arrow Button Style
// =======================================================

const TabButton = ({
   badgeNumber,
   highlightColor,
   isActive,
   name
}) => (
   <View
      css={style.tabButton({ highlightColor, isActive })}
      float="left"
      height="100%"
      padding2="0px 12px[a-d] 0 18px[e-f]"
      display="flex"
      alignItems="center">
      <Text
         size="1.5[a-b] 2[c] 1.5[d] 2[e] 2[f]"
         weight="medium"
         style={{
            height: '18px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
         }}>
         {name}
         {typeof badgeNumber === 'number' && (
            <View
               display="inline-block"
               marginLeft="12px">
               <View
                  className="badge"
                  display="flex"
                  height="18px"
                  justifyContent="center"
                  alignItems="center"
                  padding="0 6px"
                  borderRadius="12px">
                  <Text size="1" weight="medium">
                     {badgeNumber}
                  </Text>
               </View>
            </View>
         )}
      </Text>
   </View>
)

TabButton.propTypes = {
   badgeNumber: PropTypes.number,
   highlightColor: PropTypes.string,
   isActive: PropTypes.bool,
   name: PropTypes.string.isRequired
}

TabButton.defaultProps = {
   badgeNumber: undefined,
   highlightColor: '#000',
   isActive: false
}

export default React.memo(TabButton)
