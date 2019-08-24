import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toggleLogo: true
    }
  }

  toggleLogo = (event) => {
    this.setState(prevState => ({ toggleLogo: !prevState.toggleLogo }))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={this.state.toggleLogo ? 'App-logo-static' : 'App-logo'}
            alt="logo"
            onClick={this.toggleLogo}
          />
          <h2>Welcome to React</h2>
        </header>
      </div>
    )
  }
}

export default App
