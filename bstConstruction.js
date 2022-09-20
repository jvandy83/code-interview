export default class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // O(log(n)) time | O(1) space
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }
  // O(log(n)) time | O(1) space
  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // O(log(n)) time | O(1) space
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // we've found our value
        // now, remove it and
        // reconnect the severed branches

        // if has both child nodes
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue();
          // currentNode.value = smallest value of right subtree
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            currentNode.value = null;
          }
        } else if (parentNode.left === currentNode) {
          // if parentNode.left === currentNode
          // re-assign left child node of node
          // that's being removed to the parent node
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left
            ? currentNode.left
            : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
