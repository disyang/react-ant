import React, { Component } from 'react';

import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

interface propsType {
  form: any;
}

interface stateType {
  confirmDirty: boolean;
  autoCompleteResult: Array<any>;
}

class RegistrationForm extends Component<propsType, stateType> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: string, values: string) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 70 }}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    );

    return (
      <Form
        style={{ width: '600px', margin: '20px auto' }}
        {...formItemLayout}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label='用户名'>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入用户名'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label='密码'>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码'
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label='手机号'>
          {getFieldDecorator(
            'phone',
            {}
          )(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label='邮箱'>
          {getFieldDecorator('email', {})(<Input style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            更新
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'form' })(RegistrationForm);
