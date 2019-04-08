import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'

import './FullScreen.less'

import UserLogin from 'src/pages/userLogin/UserLogin'

const FullScreenContent = () => <div>FullScreenContent</div>

type Prop = {}

type State = Readonly<{}>

class FullScreen extends PureComponent<Prop, State> {
  readonly state: State = {}

  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/user/login" component={UserLogin} />
          {/* 未匹配到的路由重定向到 404 */}
          <Route component={FullScreenContent} />
        </Switch>
      </div>
    )
  }
}

export default FullScreen
