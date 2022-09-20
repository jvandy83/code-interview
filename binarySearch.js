// const array = [0, 1, 21, 32, 33, 45, 61, 71, 72, 73]
// const target = 33;

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355];
const target = 355;

// binary search iterative solution

export function binarySearch(array, target) {
  let upperBound = array.length - 1;
  let lowerBound = 0;
  let timesRan = 0;
  while (lowerBound <= upperBound) {
    timesRan++;
    let mid = Math.floor((upperBound + lowerBound) / 2);
    console.log(mid);
 
    if (array[mid] === target) {
      console.log('timesRan: ', timesRan)
      return mid;
    } else if (target > array[mid]) {
      lowerBound = mid + 1;
    } else {
      upperBound = mid - 1;
    }
  }
  return -1;
}

// const solution = binarySearch(array, target);


// binary search recursive solution

function recursiveBinarySearch(arr, x, lower, upper) {
  //...
  if (lower > upper) return -1;

  let mid = Math.floor((lower + upper) / 2);

  if (target === arr[mid]) {
    return mid;
  } else if (target > arr[mid]) {
    return recursiveBinarySearch(arr, x, mid + 1, upper);
  } else {
    return recursiveBinarySearch(arr, x, lower, mid - 1);
  }
};

// const solution = recursiveBinarySearch(array, target, 0, array.length - 1)
