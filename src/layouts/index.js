import React from "react"
import Link from "gatsby-link"

import Footer from '../components/footer'

import layoutStyles from '../css/layout.module.css'
import headerStyles from '../css/header.module.css'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div className={layoutStyles.container}>
    <header className={headerStyles.header}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3>Ryan and Kaye</h3>
      </Link>
      <p>
        January 4, 2019
      </p>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/location">Location</ListLink>
        <ListLink to="/rsvp/">RSVP</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}

    <Footer></Footer>
  </div>