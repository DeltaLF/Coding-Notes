function heapMax(array, s, e) {
  // s for start, e for end
  let index = -1;
  let temp;
  let left = s * 2 + 1;
  let right = s * 2 + 2;
  while (left < e) {
    if (array[left] > array[s]) {
      index = left;
    }
    if (right < e && array[right] > array[left] && array[right] > array[s]) {
      index = right;
    }
    if (index < s) {
      break;
    }
    temp = array[e];
    array[e] = array[index];
    array[index] = temp;
    e = index;
    left = e * 2 + 1;
    right = e * 2 + 2;
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
// Tree Traversal
function breadthFirstTraversal(array) {
  // Breath-First Tree Trversal for perfect binary tree
  console.log(array[0]);
  for (let i = 0; i < array.length; i++) {
    // perfect binary tree has two children for each node
    const childLeft = i * 2 + 1;
    const childRight = i * 2 + 2;
    if (childLeft < array.length) {
      console.log(array[childLeft]);
    }
    if (childRight < array.length) {
      console.log(array[childRight]);
    }
  }
}

//breadthFirstTraversal(array);

function posOrder_DFT(array) {
  poo(0);
  function poo(ind) {
    if (ind >= array.length) {
      return;
    }
    poo(ind * 2 + 1);
    poo(ind * 2 + 2);
    console.log(ind, array[ind]);
  }
}

posOrder_DFT(array);

function preOrder_DFT(array) {
  pro(0);
  function pro(ind) {
    if (ind >= array.length) {
      return;
    }
    console.log(ind);
    pro(ind * 2 + 1);
    pro(ind * 2 + 2);
  }
}
preOrder_DFT(array);

function inOrder_DFT(array) {
  ino(0);
  function ino(ind) {
    if (ind >= array.length) {
      return;
    }
    ino(ind * 2 + 1);
    console.log(ind);
    ino(ind * 2 + 2);
  }
}
inOrder_DFT(array);

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  bstInsert(val) {
    const newNode = new Node(val);
    let node = this.root;
    let target = node;
    while (node) {
      target = node;
      if (newNode.val >= node.val) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    if (!target) {
      // empty bst
      this.root = newNode;
      return;
    }
    if (newNode.val >= target.val) {
      target.right = newNode;
    } else {
      target.left = newNode;
    }
    return;
  }
}

module.exports = { BinarySearchTree };
