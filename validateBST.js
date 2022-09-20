export function validateBST(tree) {
  const min = -Infinity;
  const max = Infinity;
  return validateBSTHelper(tree, min, max);
}

function validateBSTHelper(tree, min, max) {
  if (!tree) {
    return true;
  }
  if (tree.value < min || tree.value >= max) {
    return false;
  }
  const isLeftValid = validateBSTHelper(tree.left, min, tree.value);
  return isLeftValid && validateBSTHelper(tree.right, tree.value, max);
}
