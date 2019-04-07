import React, { PureComponent } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu
import './Menu.less'
import logo from 'src/assets/logo.svg'

import { asideMenuConfig } from 'src/router/menu/menuConfig'

type Prop = {} & RouteComponentProps
type State = {}

class Sider extends PureComponent<Prop, State> {
  readonly state: State = {}

  render() {
    return (
      <React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <Menu mode="inline">{this.getNavMenuItems()}</Menu>
      </React.Fragment>
    )
  }

  /**
   * 获取菜单项数据
   */
  getNavMenuItems = () => {
    return asideMenuConfig.map((item: any) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </span>
            }
          >
            {item.children.map((subItem: any) => {
              return (
                <Menu.Item key={subItem.path}>
                  <Link to={subItem.path}>{subItem.name}</Link>
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.path}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Menu.Item>
        )
      }
    })
  }
}

export default withRouter(Sider)
