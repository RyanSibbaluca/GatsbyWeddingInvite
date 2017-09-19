import React from "react"

import Header from '../components/header';

export default ({ children }) =>
  <div style={{ margin: "3rem auto", maxWidth: 6000 }}>

    <Header></Header>
    {children}
  </div>
