import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom'
import * as specimens from '../../specimens'

const toDashCase = specimenNameStr => (
   specimenNameStr
      .replace('Specimen', '')
      // weird if kept as all caps
      .replace('OIO', 'Oio')
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase()
)

const Tests = ({ match }) => (
   <Switch>
      {Object.keys(specimens).map(name => (
         <Route
            key={name}
            path={`${match.url}/${toDashCase(name)}`}
            component={specimens[name]}
         />
      ))}
      <Route
         render={() => (
            <div>
               Specimen Not Found
               <br />
               {Object.keys(specimens).map(name => (
                  <div>
                     <br />
                     <Link key={name} to={`${match.url}/${toDashCase(name)}`}>{name}</Link>
                  </div>
               ))}
            </div>
         )}
      />
   </Switch>
)

Tests.propTypes = {
   match: PropTypes.object.isRequired
}

export default Tests
