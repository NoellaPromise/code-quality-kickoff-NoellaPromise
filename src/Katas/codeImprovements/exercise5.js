function calculateFactorial(n) {
  return n === 0 || n === 1 ? 1 : n * calculateFactorial(n - 1);
}
