import React, { Component } from 'react'
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

export default class Tests extends Component {
   static propTypes = {
      match: PropTypes.object.isRequired
   }

   render() {
      const { match } = this.props
      return (
         <>
            <Switch>
               {Object.keys(specimens).map(name => (
                  <Route
                     key={name}
                     path={`${match.url}/${toDashCase(name)}`}
                     component={specimens[name]}
                  />
               ))}
               <Route render={() => "Specimen Not Found"} />
            </Switch>
            <br />
            {Object.keys(specimens).map(name => (
               <>
                  <br />
                  <Link key={name} to={`${match.url}/${toDashCase(name)}`}>{name}</Link>
               </>
            ))}
         </>
      )
   }
}
