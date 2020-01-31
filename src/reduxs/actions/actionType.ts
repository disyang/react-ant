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
