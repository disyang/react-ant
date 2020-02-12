import React from 'react';
import './index.less';
// import { Spin } from 'antd';

interface drag {
  name: string;
  id: number;
}

interface propsType {
  dragList: Array<drag>;
}

const DropPage = (props: propsType) => (
  <div className='drop'>
    {props.dragList.map(v => (
      <div title='拖拽我' className='child' draggable key={v.id}>{v.name}</div>
    ))}
  </div>
);

export default DropPage;
