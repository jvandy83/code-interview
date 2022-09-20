export function addStrings(n1, n2) {
  let longestNumber = n1.length > n2.length ? n1.length -1 : n2.length - 1;
  let shortestNumber = n1.length < n2.length ? n1.length - 1 : n2.length - 1;
  let rightInt1 = n1.length - 1;
  let rightInt2 = n2.length - 1;
  let runningTotal = 0;
  let carry = 0;
  let final = "";
  while (longestNumber >= 0) {
    const isValidInt1 = parseInt(n1[rightInt1]);
    const isValidInt2 = parseInt(n2[rightInt2]);
    const num1 = isValidInt1 ? isValidInt1 : 0;
    const num2 = isValidInt2 ? isValidInt2 : 0;
    runningTotal = num1 + num2 + carry;
    let runningTotalWithCarry = null;
    if ((num1 + num2 + carry) >= 10 && longestNumber > 0) {
      runningTotalWithCarry = runningTotal % 10;
    }
    carry = runningTotal > 10 ? 1 : 0;
    console.log(runningTotal);
    const subTotal = runningTotalWithCarry ? runningTotalWithCarry : runningTotal;
    final = subTotal + final;
    rightInt1--;
    rightInt2--;
    longestNumber--;
  }
  return final;
}