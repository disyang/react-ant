import { LoginCount } from '../actions/actionType';
import { LOGIN_COUNT } from '@constants/index';

const initState = {
  loginCount: 0
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
