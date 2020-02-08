/**
 * 这几个向组件传递函数的方式，你能解释它们的不同吗？
 *
 * 当你点击每个按钮会发生什么？
 */
import React, { Component } from 'react';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.name = 'MyComponent';
    this.handleClick2 = this.handleClick1.bind(this);
  }
  name: string;

  handleClick2: () => void;

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => alert(this.name);

  render() {
    return [];
  }
}
