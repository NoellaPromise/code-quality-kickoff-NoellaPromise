function calculateAverage(numbers) {
  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
  const average = sum / numbers.length;

  return average;
}
