export function arrayOfProducts(array) {
  const cache = {};
  for (let num of array) {
    if (!cache[num]) {
      cache[num] = 1;
    } else {
      cache[num] + 1;
    }
    if (cache[num] > 1) {
      return num;
    }
  }
  return -1;
}