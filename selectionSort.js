export function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    console.log('outer: ', array);
    for (let j = i + 1; j < array.length; j++) {
      console.log('inner: ', array);
      if (array[min] > array[j]) {
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
// export function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[min] > array[j]) {
//         min = j;
//       }
//     }
//     let temp = array[i];
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }
