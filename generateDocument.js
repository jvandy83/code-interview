// function countCharacterFrequency(character, target) {
//   let frequency = 0;
//   for (let char of target) {
//     if (char === character) {
//       frequency += 1;
//     }
//   }
//   return frequency;
// }

// O(m * (n + m)) time | O(1) space
// export function generateDocument(characters, document) {
  
//   for (let character of document) {
//     const documentFrequency = countCharacterFrequency(character, document);
//     const charactersFrequency = countCharacterFrequency(character, characters);
//     if (documentFrequency > charactersFrequency) {
//       return false;
//     }
//   }
//   return true;
// }


// O(c * (n + m)) time | O(c)
// export function generateDocument(characters, document) {
//   const alreadyCounted = new Set();
  
//   for (let character of document) {
//     if (character in alreadyCounted) {
//       continue;
//     }
//     const documentFrequency = countCharacterFrequency(character, document);
//     const charactersFrequency = countCharacterFrequency(character, characters);

//     if (documentFrequency > charactersFrequency) {
//       return false;
//     }
//     alreadyCounted.add(character);
//   }
//   return true;
// }

// O(n + m) time | O(c) space
export function generateDocument(characters, document) {
  const characterCounts = {};
  for (let char of characters) {
    if (!characterCounts[char]) {
      characterCounts[char] = 1;
    } else {
      characterCounts[char] += 1;
    }
  }

  for (let char of document) {
    if (!characterCounts[char] || characterCounts[char] === 0) {
      return false;
    }
    characterCounts[char] -= 1;
  }
  return true;
}