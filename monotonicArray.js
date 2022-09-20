export function monotonicArray(array) {
  let order = null;
  let monotonic = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      continue;
    }
    if (!order && array[i] !== array[i + 1]) {
      order = array[i] > array[i + 1] ? 'decreasing' : 'increasing';
    }
    const comparePairs = array[i] > array[i + 1] ? 'decreasing' : 'increasing';
    if (order !== comparePairs) {
      monotonic = false;
    }
  }
  return monotonic;
}