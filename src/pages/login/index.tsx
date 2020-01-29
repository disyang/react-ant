import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
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

class Login extends Component<propType, stateType> {
  constructor(props: propType) {
    super(props);
    this.state = {
      image: ImageType.normal
    };
  }

  private imageSource(): string {
    const { image } = this.state;
    if (image === ImageType.blind) {
      return require('@images/normal.png');
    } else if (image === ImageType.greet) {
      return require('@images/greeting.png');
    }
    return require('@images/blindfold.png');
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
        <img src={this.imageSource()} alt='登录图片' width='150' height='150' />
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
            {getFieldDecorator('password', {
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
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>记住我</Checkbox>)}
            <a className='login-form-forgot' href=''>
              忘记密码
            </a>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              登录
            </Button>
            或者 <a href=''>注册</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Login);
