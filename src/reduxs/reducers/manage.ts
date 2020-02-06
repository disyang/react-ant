import { addManage, Manage } from '../actions/actionType';
import { ADD, EDIT, DEL } from '@constants/index';

const initSate: Array<Manage> = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    time: '2020-02-05 14:49:00',
    address: 'New York No. 1 Lake Park',
    tags: 'nice,developer'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    time: '2020-02-05 14:49:00',
    address: 'London No. 1 Lake Park',
    tags: 'loser'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    time: '2020-02-05 14:49:00',
    address: 'Sidney No. 1 Lake Park',
    tags: 'cool,teacher'
  }
];

export function manage(state = initSate, action: addManage): Array<Manage> {
  switch (action.type) {
    case 'ADD':
      return [action.manage, ...state];
    case 'EDIT':
      const index = state.findIndex(v => v.key === action.manage.key);
      state[index] = action.manage;
      return state;
    case 'DEL':
      return state.filter(v => v.key !== action.manage.key);
    default:
      return state;
  }
}

export function addManInfo(manage: Manage): addManage {
  return {
    type: ADD,
    manage
  };
}
export function delManInfo(manage: Manage): addManage {
  return {
    type: DEL,
    manage
  };
}
export function editManInfo(manage: Manage): addManage {
  return {
    type: EDIT,
    manage
  };
}
