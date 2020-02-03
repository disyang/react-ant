import { Momment, addComment } from '../actions/actionType';
import { COMMENT } from '@constants/index';

const initSate: Array<Momment> = [];

export function comment(
  state = initSate,
  action: addComment
): Array<Momment> {
  switch (action.type) {
    case COMMENT:
      return [action.momment, ...state];
    default:
      return state;
  }
}

export function increase(momment: Momment): addComment {
  return {
    type: COMMENT,
    momment
  };
}
