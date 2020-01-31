import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import './login.less';
import { register } from '@mocks/login';

interface form {
  username: string;
  passwordOne: string;
  passwordTwo: string;
}

interface propsType {
  form: any;
  history: any;
}

class Register extends Component<propsType, any> {
  constructor(props: propsType) {
    super(props);
  }

  back(e: any) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  handleSubmit = (e: any) => {
    console.log(this.props)
    e.preventDefault();
    this.props.form.validateFields((err: string, values: form): any => {
      if (!err) {
        const type = register(
          values.username,
          values.passwordOne,
          values.passwordTwo
        );
        if (type === 1) return message.error('密码不一致, 请修改');
        else {
          this.props.history.push('/login');
          return message.success('注册成功');
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const back = this.back.bind(this);
    return (
      <div className='login_main'>
        <img
          src={require('@images/normal.png')}
          alt='登录图片'
          width='100'
          height='100'
        />
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                allowClear
                placeholder='请输入用户名'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passwordOne', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                allowClear
                type='password'
                placeholder='请输入密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passwordTwo', {
              rules: [{ required: true, message: '请确认密码' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                allowClear
                type='password'
                placeholder='请确认密码'
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
          <Form.Item>
            <Icon title="返回" type='left-circle' onClick={back} className='login_icon' />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'register' })(Register);
