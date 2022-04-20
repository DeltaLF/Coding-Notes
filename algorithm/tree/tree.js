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
function BreathFirstTraversal(array) {
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

BreathFirstTraversal(array);
