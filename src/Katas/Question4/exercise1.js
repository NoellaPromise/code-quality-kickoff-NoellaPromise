function getNestingLevel(arr) {
  if (!Array.isArray(arr)) {
    return 0; // Not an array, so nesting level is 0.
  } else {
    const levels = arr.map((item) => getNestingLevel(item));
    return Math.max(0, ...levels) + 1;
    function flattenArray(arr) {
      const level = getNestingLevel(arr);

      if (level === 0) {
        return arr;
      } else {
        return arr.flat(level);
      }
    }
  }
}
