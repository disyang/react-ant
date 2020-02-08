// 实现斐波那契
export const cb = function(s: string): string {
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



