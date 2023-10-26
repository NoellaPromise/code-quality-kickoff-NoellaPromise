function decimalToBinary(decimal) {
  if (typeof decimal !== "number" || isNaN(decimal)) {
    return "Not a valid number.";
  }

  return decimal.toString(2);
}

console.log(decimalToBinary(12));