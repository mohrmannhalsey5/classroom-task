function calculateGCD(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function sumSquares(x: number, y: number): number {
  return x * x + y * y;
}
