import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { createHashHistory } from 'history'

const history = createHashHistory()

import { Provider } from 'react-redux'
import configureStore from 'src/redux/configureStore'

import Router from 'src/router/router'

const { store } = configureStore({}, history)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
