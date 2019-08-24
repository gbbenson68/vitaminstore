import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Card from './components/Card.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toggleLogo: true,
      cards: [ {id: 1},
               {id: 2},
               {id: 3},
               {id: 4},
               {id: 5},
               {id: 6}
             ]
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
            className={this.state.toggleLogo ? 'App-logo-static' : 'App-logo-static animated rubberBand'}
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
          />
          <h2>Welcome to React</h2>
        </header>
        <div className="Grid">
          {
            this.state.cards.map(card => (
              <Card duration={150} key={card.id} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App
