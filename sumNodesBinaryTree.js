export function sum(node) {
  if (!node) {
    return 0;
  }
  return sum(node.left) + node.value + sum(node.right);
}
