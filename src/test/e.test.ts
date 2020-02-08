import { sum } from '../utils';

afterEach(() => {
});

describe('测试', () => {
  test('测试1', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('测试2', () => {
    expect(sum(1, 2.5)).toBe(3.5);
  });
});

describe.each([
  [1, 2, 3],
  [1, 21, 22],
  [10, 2, 12],
  [11, 22, 33],
  [105, 2, 107],
  [100, 2, 102]
])('name %i + %i', (a, b, expected) => {
  test(`return${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
