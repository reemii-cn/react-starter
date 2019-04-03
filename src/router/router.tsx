/**
 * 定义应用路由
 */
import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from 'src/layouts/dashboard/Dashboard'

// 按照 Layout 分组路由
const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  )
}

export default Router
