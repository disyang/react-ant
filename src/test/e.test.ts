import { sum } from '../utils';

test('测试1', () => {
  expect(sum(1, 2)).toBe(3);
});
test('测试2', () => {
  expect(sum(1, 2.5)).toBe(3);
});
