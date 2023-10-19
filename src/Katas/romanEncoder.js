function solution(number) {
  // convert the number to a roman numeral
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const output = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        output += a;
        number -= roman[a];
        break;
      }
    }
  }
  return output;
}
