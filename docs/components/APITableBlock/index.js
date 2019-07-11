import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../src'
import style from '../../pages/API/style.less'

const APITableBlock = ({ spec, title }) => (
   <div className={style.block}>
      <div className={style.columnFull}>
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
   </div>
)

APITableBlock.propTypes = {
   spec: PropTypes.array.isRequired,
   title: PropTypes.string.isRequired
}

export default APITableBlock
