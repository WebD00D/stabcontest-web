import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const Navigation = sections => {

  return (
    <div className="navigation">
    <img
      className="logo"
      src={require('../../layouts/images/_SH_logo.png')}
    />
    <a href="#" className="btn-primary">
      GET TICKETS
    </a>
  </div>
  )
}

export default Navigation
