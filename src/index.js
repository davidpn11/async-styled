import React, { Component } from 'react'

class AsyncStyled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: {},
    }
  }

  setModules = importPath => {
    if (importPath.constructor.name !== 'Promise') {
      console.error('is not a promise')
      return
    }
    importPath
      .then(modules => this.setState({ mod: { ...modules } }))
      .catch(err => console.error(err))
  }

  render() {
    return <h1>tes2t</h1>
  }
}

export default AsyncStyled
