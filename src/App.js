import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from 'antd';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';
import moment from 'moment';

import Home from './Home';
import Events from './Events';
import Team from './Team';
import Apply from './Apply';
import Join from './Join';
import Contact from './Contact';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;

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
      <Router>
      <div className="App">
      <MediaQuery minWidth={768}>
        <Layout className="ant-layout">
          <Sider
            trigger={null}
            collapsible
            className="slider"
            collapsed={this.state.collapsed}
            style={{overflow: 'scroll'}}
          >
            <Avatar className="logo" size={64} src="https://avatars2.githubusercontent.com/u/35434294?s=400&u=35baf3f1c73f8de101574d7dd8655067bc496924&v=4" icon="loading" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/events">
                  <Icon type="calendar" />
                  <span>Events</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/team">
                  <Icon type="team" />
                  <span>Team</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/apply">
                  <Icon type="file-text" />
                  <span>Apply</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/join">
                  <Icon type="user-add" />
                  <span>Join</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/contact">
                  <Icon type="mail" />
                  <span>Contact</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <AppBar position="static" style={{background: '#273644'}}>
                <Toolbar disableGutters={true}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <Typography variant="h6" color="inherit">
                    Extended Reality Society
                  </Typography>
                </Toolbar>
              </AppBar>
            </Header>
            <Content style={{
              background: '#fff', minHeight: 'calc(100% - 192px)'
            }}
            > 
              <Route path="/" exact component={Home} />
              <Route path="/events/" component={Events} />
              <Route path="/team/" component={Team} />
              <Route path="/apply/" component={Apply} />
              <Route path="/join/" component={Join} />
              <Route path="/contact/" component={Contact} /> 
            </Content>
            <Footer style={{background: '#273644', minHeight: 128, color: '#fff' }}>Extended Reality Society &copy; {moment().format('YYYY')}</Footer>
          </Layout>
        </Layout>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <AppBar position="fixed" style={{background: '#273644'}}>
              <Toolbar disableGutters={true}>
                <Icon className="trigger" type='menu-unfold'/>
                <Typography variant="h6" color="inherit">
                  Extended Reality Society
                </Typography>
              </Toolbar>
              </AppBar>
          </Header>
          <Content style={{
            background: '#fff', minHeight: 'calc(100% - 192px)'
          }}
          > 
            <Route path="/" exact component={Home} />
            <Route path="/events/" component={Events} />
            <Route path="/team/" component={Team} />
            <Route path="/apply/" component={Apply} />
            <Route path="/join/" component={Join} />
            <Route path="/contact/" component={Contact} /> 
          </Content>
          <Footer style={{background: '#273644', minHeight: 128, color: '#fff' }}>Extended Reality Society &copy; {moment().format('YYYY')}</Footer>
        </Layout>
      </MediaQuery>
      </div>
      </Router>
    );
  }
}

export default App;
