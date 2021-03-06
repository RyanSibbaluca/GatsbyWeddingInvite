import React from 'react'

import Link from 'gatsby-link'

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

module.exports = ListLink