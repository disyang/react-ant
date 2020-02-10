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
