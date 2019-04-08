import { Menu } from 'src/types/menu'
import { ROLE } from 'src/utils/authority'
const asideMenuConfig: Menu[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    children: [
      {
        name: 'monitor',
        path: '/dashboard/monitor'
      }
    ]
  },
  {
    name: 'chart',
    path: '/chart',
    icon: 'line-chart',
    children: [
      {
        name: 'basic',
        path: '/chart/basic'
      },
      {
        name: 'general',
        path: '/chart/general'
      }
    ]
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'table',
    children: [
      {
        name: 'basic',
        path: '/table/basic',
        authority: [ROLE.Admin]
      },
      {
        name: 'general',
        path: '/table/general',
        authority: [ROLE.User, ROLE.Admin]
      }
    ]
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'copy',
    children: [
      {
        name: 'basic',
        path: '/list/basic'
      },
      {
        name: 'general',
        path: '/list/general'
      }
    ]
  },
  {
    name: 'profile',
    path: '/profile',
    icon: 'user',
    children: [
      {
        name: 'basic',
        path: '/profile/basic'
      },
      {
        name: 'terms',
        path: '/profile/general'
      }
    ]
  },
  {
    name: 'result',
    path: '/result',
    icon: 'hourglass',
    children: [
      {
        name: 'success',
        path: '/result/success'
      },
      {
        name: 'fail',
        path: '/result/fail'
      }
    ]
  },
  {
    name: 'account',
    path: '/account',
    icon: 'user',
    children: [
      {
        name: 'setting',
        path: '/account/setting'
      }
    ]
  },
  {
    name: 'exception',
    path: '/exception',
    icon: 'exception',
    children: [
      {
        name: '204',
        path: '/exception/204'
      },
      {
        name: '403',
        path: '/exception/403'
      },
      {
        name: '404',
        path: '/exception/404'
      },
      {
        name: '500',
        path: '/exception/500'
      }
    ]
  }
]

export { asideMenuConfig }
