// export function longestPeak(array) {
//   let longestPeakLength = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     let current = array[i];
//     let left = array[i - 1];
//     let right = array[i + 1];
//     if ( left < current && right < current) {
//       const leftArray = getRunLeftOfPeak(array, i);
//       const rightArray = getRunRightOfPeak(array, i);
//       let currentLongestPeak = [...leftArray, array[i], ...rightArray];
//       if (currentLongestPeak.length > longestPeakLength) {
//         longestPeakLength = currentLongestPeak.length;
//       }
//     }
//   }
//   return longestPeakLength;
// }

// function getRunLeftOfPeak(array, index) {
//   let smallest = array[index];
//   const leftResultsArray = [];
//   for (let j = index; j >= 0; j--) {
//     if (array[j - 1] < smallest) {
//       smallest = array[j - 1];
//       leftResultsArray.push(smallest);
//     } else {
//       break;
//     }
//   }
//   return leftResultsArray;
// }
// function getRunRightOfPeak(array, index) {
//   let smallest = array[index];
//   const rightResultsArray = [];
//   for (let j = index; j < array.length; j++) {
//     if (array[j + 1] < smallest) {
//       smallest = array[j + 1];
//       rightResultsArray.push(smallest);
//     } else {
//       break;
//     }
//   }
//   return rightResultsArray;
// }

export function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i += 1;
      continue;
    }
    console.log(left, current, right);
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx -= 1;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx += 1;
    }
    let currentLongestPeak = rightIdx - leftIdx - 1;
    if (currentLongestPeak > longestPeakLength) {
      longestPeakLength = currentLongestPeak;
    }
    i = rightIdx;
  }
  return longestPeakLength;
}