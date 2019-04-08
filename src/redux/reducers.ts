import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from 'src/redux/user/reducer'

import { History } from 'history'

export default (history: History) =>
  combineReducers({ router: connectRouter(history), user: userReducer })
