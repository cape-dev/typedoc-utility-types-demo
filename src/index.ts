export interface Foo {
  foo: number;
  bar: string;
}

export interface Bar extends Partial<Foo> {}
