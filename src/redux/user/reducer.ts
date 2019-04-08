/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { USER_LOGIN_SUCCESS } from './constants'
import { UserLoginSuccessAction } from './actions'
import { ROLE } from 'src/utils/authority'

// The initial state of the login
const initialState = {
  role: ROLE.NONE
}

export type UserState = Readonly<typeof initialState>

function userReducer(state = initialState, action: UserLoginSuccessAction) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        role: action.role
      })

    default:
      return state
  }
}

export default userReducer
