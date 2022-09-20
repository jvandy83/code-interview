// O(n) time | O(1) space
export function firstNonRepeatingCharacter(string) {
  const charCounts = {};
  for (let char of string) {
    if (!charCounts[char]) {
      charCounts[char] = 1;
    } else {
      charCounts[char] += 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (charCounts[character] === 1) {
      return i;
    }
  } 
  return -1;
}