// Question : Write a function(s) that checks the level of nesting of an array. Then,
// use that function to flatten the array into a single-dimensional array.

function getNestingLevel(array) {
  // Not an array, so nesting level is 0.
  if (!Array.isArray(array)) return 0;
  const levels = array.map((item) => getNestingLevel(item));
  return Math.max(0, ...levels) + 1;
}

function flattenArray(array) {
  const level = getNestingLevel(array);
  return level === 0 ? Array : array.flat(level);
}
