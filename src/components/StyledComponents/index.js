import React from 'react'
import Link from 'gatsby-link'

import './index.css'

export const H1 = ({ children, align, className }) => (
  <h1 className={className} style={{ textAlign: align }}>
    {children}
  </h1>
)

export const H2 = ({ children, align, className }) => (
  <h2 className={className} style={{ textAlign: align }}>
    {children}
  </h2>
)

export const H3 = ({ children, align, className }) => (
  <h3 className={className} style={{ textAlign: align }}>
    {children}
  </h3>
)
