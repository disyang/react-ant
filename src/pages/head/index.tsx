import React, { Component } from 'react';
import './head.less'


interface propsType {
    username: string;
}

interface stateType {
  username: string;
}

export default class Home extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
  }

  render() {
    return (
      <div className="head">
          <ul>
          </ul>
      </div>
    );
  }
}
