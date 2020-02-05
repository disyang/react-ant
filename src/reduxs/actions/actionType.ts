import * as constants from '@constants/index';

// 统计登录次数
export interface LoginCount {
  type: constants.LOGIN_COUNT;
  loginCount: number;
}

// 记住账号和密码
export interface info {
  remember: boolean;
  password: string;
  username: string;
}

export interface InfoRem {
  type: constants.REM;
  info: info;
}

// 评论
export interface Momment {
  author: string;
  avatar: string;
  content: string;
  datetime: string;
}

// 保存评论
export interface addComment {
  type: constants.COMMENT;
  momment: Momment;
}

// 新增表单
export interface Manage {
  key: string;
  name: string;
  age: number;
  time: string;
  address: string;
  tags: Array<string>;
}

export interface addManage {
  type: constants.ADD | constants.DEL | constants.EDIT;
  manage: Manage;
}
