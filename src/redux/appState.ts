import { RouterState } from 'connected-react-router'
import { UserState } from 'src/redux/user/reducer'
type AppState = {
  router: RouterState
  user: UserState
}
export default AppState
