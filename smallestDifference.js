export function smallestDifference(arrayOne, arrayTwo) {
  const sortedArrayOne = arrayOne.sort((a, b) => a - b);
  const sortedArrayTwo = arrayTwo.sort((a, b) => a - b);
  const getAbsoluteValue = (a, b) => Math.abs(a - b);
  let smallestDiff = Infinity;
  let results = [];
  let notFound = true;
  let firstPointer = 0;
  let secondPointer = 0;
  while (notFound) {
    const n1 = sortedArrayOne[firstPointer];
    const n2 = sortedArrayTwo[secondPointer];
    const next = getAbsoluteValue(n1, n2);
    if (next < smallestDiff) {
      smallestDiff = next;
      console.log(smallestDiff);
      results.pop();
      results.push([n1, n2]);
      console.log(results);
    }
    if (n1 < n2) {
      firstPointer++;
    } else {
      secondPointer++;
    }
    if (firstPointer > arrayOne.length - 1 || secondPointer > arrayTwo.length - 1) {
      notFound = false;
    }
  }
  return results[0];
}
// export function smallestDifference(arrayOne, arrayTwo) {
//   const getAbsoluteValue = (a, b) => Math.abs(a - b);
//   let smallestDiff = Infinity;
//   let results = [];
//   for (let n1 of arrayOne) {
//     for (let n2 of arrayTwo) {
//       const next = getAbsoluteValue(n1, n2);
//       if (next < smallestDiff) {
//         smallestDiff = next;
//         results.pop();
//         results.push([n1, n2]);
//       }
//     }
//   }
//   return results[0];
// }