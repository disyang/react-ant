import { LoginCount, InfoRem, info } from '../actions/actionType';
import { LOGIN_COUNT, REM } from '@constants/index';

const initState = {
  loginCount: 0,
  infoRem: {
    remember: false,
    password: '',
    username: ''
  }
};

export function loginCount(
  state = initState.loginCount,
  action: LoginCount
): number {
  switch (action.type) {
    case LOGIN_COUNT:
      return state + action.loginCount;
    default:
      return state;
  }
}

export function addCount(n: number): LoginCount {
  return {
    type: LOGIN_COUNT,
    loginCount: n
  };
}

export function remember(state = initState.infoRem, action: InfoRem): info {
  switch (action.type) {
    case REM:
      return action.info;
    default:
      return state;
  }
}

export function addRemember(n: info): InfoRem {
  return {
    type: REM,
    info: n
  };
}
