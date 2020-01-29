import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import './login.less';
import { login } from '@mocks/login';

interface propType {
  isLogin: boolean;
  form: any;
}

enum ImageType {
  normal,
  greet,
  blind
}

interface stateType {
  image: ImageType;
}

interface form {
  username: string;
  password: string;
  remember: boolean;
}

class Register extends Component<propType, stateType> {
  constructor(props: propType) {
    super(props);
    this.state = {
      image: ImageType.normal
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: string, values: form): any => {
      if (!err) {
        const type = login(values.username, values.password);
        if (type === 1) return message.error('用户名不存在!');
        else if (type === 2) return message.error('密码错误!');
        console.log('Received values of form: ', type);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login_main'>
        <img src={require('@images/normal.png')} alt='登录图片' width='100' height='100' />
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                allowClear
                placeholder='用户名'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passwordOne', {
              rules: [{ required: true, message: '请输入密码!' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                allowClear
                type='password'
                placeholder='密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passwordTwo', {
              rules: [{ required: true, message: '请确认密码!' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                allowClear
                type='password'
                placeholder='确认密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'register' })(Register);
