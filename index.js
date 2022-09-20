import { findThreeLargestNumbers } from './findThreeLargestNumbers.js';
import { binarySearch } from './binarySearch.js';
import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { selectionSort } from './selectionSort.js';
import { isPalindrome } from './isPalindrome.js';
import { caesarCipherEncryptor } from './caesarCipherEncryptor.js';
import { runLengthEncoding } from './runLengthEncoding.js';
import { generateDocument } from './generateDocument.js';
import { nodeDepths } from './nodeDepths.js';
import { smallestDifference } from './smallestDifference.js';
import { moveTheElementToTheEnd } from './moveElementToTheEnd.js';
import { monotonicArray } from './monotonicArray.js';
import { spiralTraverse } from './spiralTraverse.js';
import { longestPeak } from './longestPeak.js';
import { addStrings } from './addStrings.js';
import { arrayOfProducts } from './arrayOfProducts.js';
import { mergeOverlappingIntervals } from './mergeOverlappingIntervals.js';
// import BST from './bstConstruction.js';
import { sum } from './sumNodesBinaryTree.js';
import { validateBST } from './validateBST.js';

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bst = new BST(10);
bst.left = new BST(5);
bst.left.right = new BST(5);
bst.left.left = new BST(2);
bst.left.left.left = new BST(1);

bst.right = new BST(15);
bst.right = new BST(22);
bst.right.left = new BST(13);
bst.right.left.right = new BST(14);

console.log(validateBST(bst));
