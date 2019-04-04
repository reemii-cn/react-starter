import UserLogin from 'src/pages/userLogin/UserLogin'
import Charts from 'src/pages/charts'
import Table from 'src/pages/table'
import Forbidden from 'src/components/exception/403'
import NotFound from 'src/components/exception/404'

import { asideMenuConfig } from './menu/menuConfig'

import { getRouterData } from 'src/utils/utils'

const routerConfig = [
  {
    path: '/table/general',
    component: Table
  },

  {
    path: '/chart/general',
    component: Charts
  },

  {
    path: '/exception/403',
    component: Forbidden
  },

  {
    path: '/exception/404',
    component: NotFound
  },
  {
    path: '/user/login',
    component: UserLogin
  }
]

const routerData = getRouterData(routerConfig, asideMenuConfig)

export { routerData }
