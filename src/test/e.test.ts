import { sum, divisor, longestWord } from '../utils';

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
  test(`return-> ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});

describe.each([
  [1, 2, 2],
  [5, 7, 35],
  [3, 6, 6],
  [11, 5, 55],
  [34, 10, 170]
])('name %i + %i', (a, b, expected) => {
  test(`return-> ${expected}`, () => {
    expect(divisor(a, b)).toBe(expected);
  });
});

describe.each([
  [['w', 'wo', 'wor', 'worl', 'world'], 'world'],
  [['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'], 'apple']
])('name -> ', (a, expected) => {
  test(`return-> ${expected}`, () => {
    expect(longestWord(a)).toBe(expected);
  });
});
