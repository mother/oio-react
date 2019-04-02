import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
   render() {
      return (
         <div>
            Welcome to OIO
            <Link to="/api">Click here for Docs</Link>
         </div>
      )
   }
}
