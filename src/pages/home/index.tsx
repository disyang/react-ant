import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Eform from '@pages/user';
import Comment from '@pages/comment';
import './home.less';
import Manage from '@pages/manage';
import System from '@pages/system';
import Drop from '@components/drop';

const { Header, Sider, Content } = Layout;

interface stateType {
  collapsed: boolean;
  index: number;
}

export default class SiderDemo extends Component<any, stateType> {
  constructor(props: any) {
    super(props);
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
    const dropList = [
      { id: 1, name: '标签1' },
      { id: 2, name: '标签2' },
      { id: 3, name: '标签3' },
      { id: 4, name: '标签4' },
      { id: 5, name: '标签5' },
      { id: 6, name: '标签6' }
    ];
    const cb = (index: number) => {
      if (index === 0) return <Eform />;
      else if (index === 2) return <Manage />;
      else if (index === 5) {
        return <Comment login={this.props.match.params.username} />;
      } else if (index === 1) return <System />;
      else if (index === 4) return <Drop dragList={dropList} />;
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
              <Icon style={{ verticalAlign: '-1px' }} type='caret-right' />
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
                  {this.props.match.params.username || '游客'}
                </span>
              </section>
            </Dropdown>
          </Header>
          <Content className='content_main'>{cb(this.state.index)}</Content>
        </Layout>
      </Layout>
    );
  }
}
