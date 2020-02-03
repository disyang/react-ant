import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.less';

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const siderList = [
      {
        icon: 'user',
        span: '个人信息'
      },
      {
        icon: 'home',
        span: '系统主页'
      },
      {
        icon: 'form',
        span: '数据管理'
      },
      {
        icon: 'setting',
        span: '系统设置'
      },
      {
        icon: 'fund',
        span: '图表管理'
      }
    ];
    const menu = (
      <Menu>
        <Menu.Item key='1'>
          <Link to='/login'>
            <Icon type='logout' />
            &nbsp; 退出登录
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className='layout_head'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            {siderList.map((v, index) => (
              <Menu.Item key={index}>
                <Icon type={v.icon} />
                <span>{v.span}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className='login_head'>
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Dropdown
              overlay={menu}
              trigger={['click', 'hover']}
              placement='bottomCenter'
            >
              <section className='sec_login'>
                <Avatar
                  size='small'
                  style={{ backgroundColor: '#1890ff' }}
                  icon='user'
                />
                &nbsp;&nbsp;
                <span style={{ fontSize: '20px' }}>123</span>
              </section>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
