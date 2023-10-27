function getFibonacci(number) {
  if (number <= 0) {
    return "Please provide a positive integer.";
  }
  if (number === 1) return [0];

  const sequence = [0, 1];
  for (let i = 2; i < number; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}
