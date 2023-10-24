function calculateAverage(numbers) {
  const average =
    numbers.reduce((accumulator, number) => accumulator + number) /
    numbers.length;
}
