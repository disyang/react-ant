import { Layout, Menu, Icon, Avatar, Dropdown, Input } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Eform from '@pages/user';
import './home.less';

const { Header, Sider, Content } = Layout;

interface stateType {
  collapsed: boolean;
  index: number;
}

export default class SiderDemo extends Component<any, stateType> {
  constructor(props: any) {
    super(props);
    console.log(this.props);
    this.state = {
      collapsed: false,
      index: 0
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  setIndex = (e: any): void => {
    this.setState({
      index: +e.key
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
      },
      {
        icon: 'message',
        span: '发表评论'
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
    const cb = (index: number) => {
      if (index === 0) return <Eform />;
      else return 'none';
    };
    return (
      <Layout className='layout_head'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['0']}>
            {siderList.map((v, index) => (
              <Menu.Item onClick={this.setIndex} key={index}>
                <Icon type={v.icon} />
                <span>{v.span}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className='login_head'>
            <section>
              <Icon
                className='trigger'
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              &nbsp;
              <span style={{ verticalAlign: '1px' }}>
                {siderList[this.state.index].span}
              </span>
              <Icon style={{verticalAlign: '-1px',}} type='caret-right' />
            </section>
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
                <span style={{ fontSize: '18px' }}>
                  {this.props.match.params.username}
                </span>
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
            {cb(this.state.index)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
