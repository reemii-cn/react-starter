import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createReducer from './reducers'
import { History } from 'history'

export default function configureStore(initialState = {}, history: History) {
  const rootReducer = createReducer(history)

  let middlewares = [thunk, routerMiddleware(history)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }
  const enhancers = applyMiddleware(...middlewares)
  const store = createStore(rootReducer, initialState, enhancers)
  return { store }
}
