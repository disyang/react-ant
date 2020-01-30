function f() {
  console.log('f(): evaluated');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('f(): called', target, propertyKey, descriptor);
  };
}

function g() {
  console.log('g(): evaluated');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('g(): called');
  };
}

export class C {
  @f()
  @g()
  method(s: string) {
    console.log(s);
  }
}
