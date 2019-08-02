import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from '../../../src'
import style from './style.less'

const APITableBlock = ({ spec, title }) => (
   <View
      float="left"
      width="100%"
      padding="48px"
      borderBottom="1px solid rgba(0,0,0,0.1)">
      <div>
         <Text size="4" weight="bold">
            {title}
         </Text>
         <br />
         <table className={style.table}>
            <thead>
               <tr>
                  <th width="200px">Prop</th>
                  <th width="90px">Prop Type</th>
                  <th width="150px">Default Value</th>
                  <th>Description/Options</th>
                  <th>Responsive</th>
               </tr>
            </thead>
            <tbody>
               {spec.map(option => (
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
   </View>
)

APITableBlock.propTypes = {
   spec: PropTypes.array.isRequired,
   title: PropTypes.string.isRequired
}

export default APITableBlock
