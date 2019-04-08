import React, { PureComponent } from 'react'
import { routerData } from 'src/router/routerConfig'
import { Router } from 'src/types/menu'
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from 'src/components/exception/404'
import { getAuthority } from 'src/utils/authority'

type Prop = {}

type State = Readonly<{}>

class Content extends PureComponent<Prop, State> {
  readonly state: State = {}

  render() {
    console.log(getAuthority())
    return (
      <Switch>
        {routerData.map((item: Router) => {
          if (item.authority && !item.authority.includes(getAuthority())) {
            return (
              <Redirect key={item.path} from={item.path} to="/exception/403" />
            )
          }
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          )
        })}
        {/* 未匹配到的路由重定向到 404 */}
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Content
