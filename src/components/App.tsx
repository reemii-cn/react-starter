import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import { Button } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{process.env.REACT_APP_NAME}</p>
          <Button>ReeMii</Button>
        </header>
      </div>
    )
  }
}

export default App
