// O(n log(n)) time | O(n) space

export function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  let final = [];
  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    if (final.length === 0) {
      final.push(currentArray);
      continue;
    }
    let lastArrayInFinal = final[final.length - 1];
    if (lastArrayInFinal[1] >= currentArray[0]) {
      let larger =
        lastArrayInFinal[1] > currentArray[1]
          ? lastArrayInFinal[1]
          : currentArray[1];
      lastArrayInFinal[1] = larger;
    } else {
      final.push(currentArray);
    }
  }
  return final;
}
// export function mergeOverlappingIntervals(array) {
//   const final = [];
//   let current = 0;
//   let rightIdx = 1;
//   let mergeIdx = -1;
//   while (rightIdx < array.length) {
//     if (
//       array[current][1] >= array[rightIdx][0] &&
//       rightIdx < array.length - 1
//     ) {
//       if (mergeIdx < 0) {
//         mergeIdx = current;
//       }
//       current++;
//       rightIdx++;
//     } else {
//       if (mergeIdx >= 0) {
//         final.push([array[mergeIdx][0], array[rightIdx][1]]);
//       } else {
//         final.push(array[current]);
//       }
//       current++;
//       rightIdx++;
//     }
//   }
//   return final;
// }
