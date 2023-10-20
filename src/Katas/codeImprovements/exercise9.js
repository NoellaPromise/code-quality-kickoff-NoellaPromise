function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (acc, row) => acc + row.reduce((rowSum, element) => rowSum + element, 0),
    0
  );
}
