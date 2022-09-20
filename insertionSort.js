export function insertionSort(array) {
  let j, key;
  // begin iterating at index 1
  // because index 0 is our substring
  // that we'll be inserting into
  for (let i = 1; i < array.length; i++) {
    j = i - 1;
    // our key is the first comparison
    // to the right of our sorted substring
    key = array[i];
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      // decrement j to continue
      // sorting towards the 0 index
      j--;
    }
    // increment key to the right
    // to grow the substring
    // and incorporate the rest
    // of the array
    array[j + 1] = key;
  }
  return array;
}
