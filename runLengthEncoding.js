let chars = 'AAAAAAAAAAAAABBBBBCCCCCCCCDDEEEEEEEEEEE';
let chars2 = 'AAABBBCCC';

export function runLengthEncoding(string) {
  const chars = [];
  let length = 1;
  for (let i = 0; i < string.length; i++) {
    let current = string[i + 1];
    let previous = string[i];
    if (length === 9) {
      chars.push(length, string[i]);
      length = 1;
    } else if (current === previous) {
      length += 1;
    } else {
      chars.push(length, string[i])
      length = 1;
    }
    
  }
  return chars.join("");
}

