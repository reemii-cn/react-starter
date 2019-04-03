import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import { Button } from 'antd'
import Router from 'src/router/router'
import { Storakie } from 'src/core/storage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{process.env.REACT_APP_NAME}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>ReeMii</Button>
          <Router />
        </header>
      </div>
    )
  }
}

export default App
