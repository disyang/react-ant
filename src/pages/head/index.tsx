import React, { Component } from 'react';
import './head.less';
import { Input, Avatar, Icon } from 'antd';

interface propsType {
  username: string;
}

interface stateType {
  username: string;
}

interface titleConfig {
  id: number;
  name: string;
}

const title: titleConfig[] = [
  {
    id: 0,
    name: '首页'
  },
  {
    id: 1,
    name: '博客'
  },
  {
    id: 2,
    name: '学院'
  },
  {
    id: 3,
    name: '下载'
  },
  {
    id: 4,
    name: '论坛'
  },
  {
    id: 5,
    name: '问答'
  },
  {
    id: 6,
    name: 'vip'
  }
];

export default class Home extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
  }

  render() {
    return (
      <div className='head'>
        <ul className='head_ul'>
          {title.map(val => (
            <li key={val.id}>{val.name}</li>
          ))}
        </ul>
        <Input placeholder='关键词搜索' />
        <Avatar>USER</Avatar>
      </div>
    );
  }
}
