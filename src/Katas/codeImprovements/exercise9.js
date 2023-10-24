function calculateMatrixSum(matrix) {
  return matrix.flat().reduce((accumulator, element) => accumulator + element);
}
