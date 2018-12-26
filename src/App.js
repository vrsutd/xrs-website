import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel, Layout, Menu, Icon, Avatar } from 'antd';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import './App.css';

const { Header, Sider, Content, Footer } = Layout;

const Home = () => <h2>Home</h2>;
const Events = () => <h2>Events</h2>;
const Team = () => <h2>Team</h2>;
const Apply = () => <h2>Apply</h2>;
const Join = () => <h2>Join</h2>;
const Contact = () => <h2>Contact</h2>;

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
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'calc(100% - 240px)'
            }}
            >
              {/* <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel> */}
              
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
      </div>
      </Router>
    );
  }
}

export default App;
