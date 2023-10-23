function calculateAverage(numbers) {
  const sum =
    numbers.reduce((accumulator, number) => accumulator + number, 0) /
    numbers.length;
}
