function fibonacci(n) {
    if (n <= 0) {
      return "Please provide a positive integer.";
    }
  
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return n === 1 ? [0] : sequence; 
  }
  