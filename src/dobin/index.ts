function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 2));

// 타입추론 (typescript)
const str = 1231321;
const arr = ['1', 2];

console.log(str, arr);

function add(a: number, b?: number) {
  return a + b;
}

add(1);
