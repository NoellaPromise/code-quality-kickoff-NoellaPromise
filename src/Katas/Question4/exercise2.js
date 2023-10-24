// Question : Write a JavaScript function to check if a given number is prime or not.

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) return false;

  return number % i === 0 ? false : true;
}
