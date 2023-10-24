function recursiveSum(arr, index = 0) {
  return index === arr.length ? 0 : arr[index] + recursiveSum(arr, index + 1);
}
