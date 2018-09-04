import React, { Component } from 'react'

class AsyncStyled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: {},
    }
  }

  setModules = importPath => {}

  render() {
    return <h1>test</h1>
  }
}

export default AsyncStyled
