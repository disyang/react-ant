import { sum } from '../utils';

afterEach(() => {
  console.log(4444);
});

describe('测试', () => {
  test('测试1', () => {
    console.log(111);
    expect(sum(1, 2)).toBe(3);
  });
  test('测试2', () => {
    console.log(2222);
    expect(sum(1, 2.5)).toBe(3.5);
  });
  console.log(3333);
});

describe.each([
  [1, 2, 3],
  [1, 21, 23],
  [10, 2, 12],
  [11, 22, 33],
  [105, 2, 107],
  [100, 2, 103]
])('name %i + %i', (a, b, expected) => {
  test(`return${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
