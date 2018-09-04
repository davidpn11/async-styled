import React, { Component } from 'react'
import { render } from 'react-dom'
import AsyncStyled from '../../src'
class App extends Component {
  getSender({ Input, Button }) {
    return (
      <React.Fragment>
        {Input ? (
          <Input placeholder="Add message" />
        ) : (
          <input placeholder="Add message" />
        )}
        {Button ? <Button>Send</Button> : <button>Send</button>}
      </React.Fragment>
    )
  }

  render() {
    return (
      <AsyncStyled>
        {({ setModules, Input, Button }) => {
          return (
            <div className="App">
              <h1>Change Styles</h1>
              <button onClick={() => setModules(import('./styles/style1'))}>
                Style1
              </button>
              <button onClick={() => setModules(import('./styles/style2'))}>
                Style2
              </button>
              <div className="sender">{this.getSender({ Input, Button })}</div>
            </div>
          )
        }}
      </AsyncStyled>
    )
  }
}
render(<App />, document.getElementById('root'))
