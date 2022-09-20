// export function nodeDepths(root) {
//   let sumOfDepths = 0;
//   const stack = [{ node: root, depth: 0 }];

//   while (stack.length > 0) {
//     const nodeInfo = stack.pop();
//     const { node, depth } = nodeInfo;
//     console.log('node: ', node);
//     console.log('depth: ', depth);
//     if (!node) {
//       continue;
//     }
//     sumOfDepths += depth;
//     stack.push({ node: node.left, depth: depth + 1 });
//     stack.push({ node: node.right, depth: depth + 1 });
//   }
//   return sumOfDepths;
// }

// // This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

export function nodeDepths(root, depth = 0) {
  console.log('root: ', root);
  console.log('depth: ', depth);
  if (!root) {
    return 0;
  }
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

