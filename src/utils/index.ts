import type { Alarm, ab } from './type'

const test: ab = '123'

export class Test implements Alarm {
  id = '123';
  name = 'yht';
  toString() {
    return this.name;
  }
}

// 实现斐波那契
export const cb = function(s: Alarm): string {
  return s.toString();
};

//判断是否大于10
export const isHasNumber = function(list: Array<number>): boolean {
  return list.some(v => v > 10);
};

export function identity<T>(arg: T): T {
  return arg;
}

interface Lengthwise {
  length: number;
}

export function loggingIdentity<T extends Lengthwise>(arg: T): T {
  identity('123');
  return arg;
}

export function sum(a: number, b: number): number {
  return a + b;
}

// 求公约数
export function divisor(A: number, B: number): number {
  if (A > B) [A, B] = [B, A];
  let i: number = 1;
  while (i <= A) {
    const total = i * B;
    if (total % A === 0) return total;
    i++;
  }
  return A * B;
}

// 词典最长单词
export const longestWord = function(words: Array<string>) {
  words.sort();
  let list: Array<string> = [];
  let s = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      s = big(s, list.pop() || '');
      list = [words[i]];
    } else if (list.length) {
      const end = list[list.length - 1];
      if (end.length === words[i].length + 1 && words[i].startsWith(end)) {
        list.push(list[i]);
      } else {
        s = big(s, list.pop() || '');
        list = [];
      }
    }
  }
  return s;
};

function big(s: string, w: string) {
  if (!w) return s;
  if (s.length > w.length) return s;
  else if (s.length < w.length) return w;
  else {
    const list = [s, w].sort();
    return list[0];
  }
}
