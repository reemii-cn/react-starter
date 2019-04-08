/*
 * Login Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { push } from 'connected-react-router'
import { setAuthority, ROLE } from 'src/utils/authority'
import { USER_LOGIN_SUCCESS } from './constants'
import { Dispatch, Action } from 'redux'

export interface UserLoginSuccessAction
  extends Action<typeof USER_LOGIN_SUCCESS> {
  role: ROLE
}

const userLoginSuccess = (role: ROLE) => {
  return {
    type: USER_LOGIN_SUCCESS,
    role
  }
}

export const AllUserAction = {}

export const userLogin = (role: ROLE) => {
  return async (dispatch: Dispatch) => {
    await timeout(3000)

    dispatch(userLoginSuccess(role))

    setAuthority(role)

    dispatch(push('/'))
  }
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
