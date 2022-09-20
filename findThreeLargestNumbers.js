const array1 = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]; // pass
const array2 = [7, 8, 3, 11, 43, 55]; // fail
const array3 = [55, 7, 8]; // fail
const array4 = [55, 7, 8, 3, 43, 11]; // fail
const array5 = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]; // fail

export function findThreeLargestNumbers(array) {
  const threeLargestNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (!threeLargestNumbers[2]) {
      threeLargestNumbers[2] = array[i];
    } else if (!threeLargestNumbers[1]) {
      threeLargestNumbers[1] = array[i];
    } else if (!threeLargestNumbers[0]) {
      threeLargestNumbers[0] = array[i];
    }
    if (array[i] > threeLargestNumbers[2]) {
      threeLargestNumbers.push(array[i]);
      threeLargestNumbers.shift();
    } else if (array[i] > threeLargestNumbers[1]) {
      threeLargestNumbers.splice(1, 1, array[i]);
    } else if (array[i] > threeLargestNumbers[0]) {
      threeLargestNumbers.splice(0, 1, array[i]);
    }
  }

  return threeLargestNumbers.sort((a, b) => a - b);
}
