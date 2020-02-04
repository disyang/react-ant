import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increase } from '@reduxs/reducers/commment';

const { TextArea } = Input;

const CommentList = ({ comments }: any) => (
  <List
    dataSource={comments}
    header={`${comments.length}条评论`}
    itemLayout='horizontal'
    renderItem={(props: any) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: any) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType='submit'
        loading={submitting}
        onClick={onSubmit}
        type='primary'
      >
        提交评论
      </Button>
    </Form.Item>
  </div>
);

class App extends React.Component<any, any> {
  state = {
    comments: [],
    submitting: false,
    value: ''
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.props.increase({
        author: this.props.login || '游客',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: <p>{this.state.value}</p>,
        datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
      });
      this.setState({
        submitting: false,
        value: ''
      });
    }, 1000);
  };

  handleChange = (e: any) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { submitting, value } = this.state;
    const { commentLists } = this.props;

    return (
      <div>
        {commentLists.length > 0 && <CommentList comments={commentLists} />}
        <Comment
          avatar={
            <Avatar
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              alt='Han Solo'
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default connect(
  (state: any) => {
    return {
      commentLists: state.comment
    };
  },
  dispatch =>
    bindActionCreators(
      {
        increase
      },
      dispatch
    )
)(App);
