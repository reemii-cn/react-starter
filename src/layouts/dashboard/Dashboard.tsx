import * as React from 'react'

import { Layout, Icon } from 'antd'

const { Header, Sider, Content, Footer } = Layout
import Menu from './c/menu/Menu'
import ContentComponent from './c/content/Content'

import './Dashboard.less'

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
      <Layout className="layout-dashboard">
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
            <ContentComponent />
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
