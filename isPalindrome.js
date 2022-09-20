export const isPalindrome = (str) => {
  let stringArray = str.split('');
  let reverseStringArray = [];
  for (let i = stringArray.length - 1; i >= 0; i--) {
    reverseStringArray.push(stringArray[i]);
  }
  return reverseStringArray.join('') === str;
}