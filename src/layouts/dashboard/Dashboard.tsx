import * as React from 'react'

import { Layout, Icon } from 'antd'

const { Header, Sider, Content, Footer } = Layout

import { Switch, Route } from 'react-router-dom'
import Menu from './c/menu/Menu'
import NotFound from 'src/components/exception/404'

class SiderComponent extends React.Component {
  state = {
    collapsed: false
  }

  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <Switch>
              {/* 未匹配到的路由重定向到 404 */}
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default SiderComponent
