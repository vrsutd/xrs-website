import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';

import './App.css';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="App">
        <Layout className="ant-layout">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Avatar className="logo" size={64} src="https://avatars2.githubusercontent.com/u/35434294?s=400&u=35baf3f1c73f8de101574d7dd8655067bc496924&v=4" icon="loading" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="home" />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="calendar" />
                <span>Events</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="team" />
                <span>Team</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="file-text" />
                <span>Apply</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="user-add" />
                <span>Join</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="mail" />
                <span>Contact</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <strong>Extended Reality Society</strong>
            </Header>
            <Content style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
              Content: soon 🚀
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
