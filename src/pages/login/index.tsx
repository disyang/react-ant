import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './login.less';
import { login } from '@mocks/login';
import { Link } from 'react-router-dom';
import { addCount, addRemember } from '@reduxs/reducers/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { info } from '@reduxs/actions/actionType';

interface propType {
  isLogin: boolean;
  form: any;
  store: any;
  addCount: Function;
  addRemember: Function;
  loginCount: number;
  remember: info;
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
  constructor(props: propType, context: any) {
    super(props, context);
    this.state = {
      image: ImageType.normal
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: string, values: form): any => {
      if (!err) {
        this.props.addCount(1);
        this.props.addRemember({
          remember: values.remember,
          password: values.password,
          username: values.username
        });
        const type = login(values.username, values.password);
        if (type === 1) return message.error('用户名不存在');
        else if (type === 2) return message.error('密码错误');
        else {
          return message.success('登录成功');
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login_main'>
        <img
          src={require('@images/blindfold.png')}
          alt='登录图片'
          width='100'
          height='100'
        />
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('username', {
              initialValue: this.props.remember.username,
              rules: [{ required: true, message: '请输入用户名' }]
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
              initialValue: this.props.remember.password,
              rules: [{ required: true, message: '请输入密码' }]
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
            或者 <Link to='/register'>注册</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'login' })(Login);

export default connect(
  (state: any) => {
    return {
      loginCount: state.loginCount,
      remember: state.remember
    };
  },
  dispatch =>
    bindActionCreators(
      {
        addCount,
        addRemember
      },
      dispatch
    )
)(LoginForm);
