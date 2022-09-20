export function moveTheElementToTheEnd(array, toMove) {
  array.sort();
  let end = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    if (i >= end) {
      return array;
    }
    if (array[i] === toMove && array[end] !== toMove) {
      let tmp = array[i];
      array[i] = array[end];
      array[end] = tmp;
      end--;
    }
    if (array[end] === toMove) {
      end--;
    }
  }
  return array;
}