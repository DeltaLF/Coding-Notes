// sorting algrithm with better performance
let array = [1, 10, 2, 5, 6, 21, 3];

module.exports = { mergeSort, heapSort, quickSort };

function mergeSort(array) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle, array.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));

  function merge(arrLeft, arrRight) {
    // merge 2 sorted array into 1 sorted array
    // resued array to save memory
    let l = 0;
    let r = 0;
    while (l < arrLeft.length && r < arrRight.length) {
      if (arrLeft[l] < arrRight[r]) {
        array[l + r] = arrLeft[l];
        l++;
      } else {
        array[l + r] = arrRight[r];
        r++;
      }
    }
    while (l < arrLeft.length) {
      array[l + r] = arrLeft[l];
      l++;
    }
    while (r < arrRight.length) {
      array[l + r] = arrRight[r];
      r++;
    }
    return array; // sort([...arr1, ... arr2])
  }
}

//heapSort(array);

function heapSort(array) {
  // 1. make maxheapify
  // 2. inital: make a max heap tree
  // 3. move array[0] to last unsorted index
  // 4. restore max heap

  // initial
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i, array.length);
  }

  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    temp = array[i];
    array[i] = array[0];
    array[0] = temp;
    maxHeapify(array, 0, i);
  }
  return array;

  function maxHeapify(array, s, e) {
    // s:start, e:end
    let ind = -1;
    let left = s * 2 + 1;
    let right = s * 2 + 2;
    let temp;
    while (left < e) {
      // console.log(left, right, e, s);
      if (array[left] > array[s]) {
        ind = left;
      }
      if (right < e && array[right] > array[s] && array[right] > array[left]) {
        ind = right;
      }
      if (ind < left) {
        break;
      }
      temp = array[s];
      array[s] = array[ind];
      array[ind] = temp;
      s = ind;
      left = s * 2 + 1;
      right = s * 2 + 2;
    }
  }
}

function quickSort(array) {
  partition(array, 0, array.length - 1);
  return array;
  function partition(array, l, r) {
    if (r <= l) {
      return;
    }
    let a = l;
    let b = l;
    let temp;
    while (a < r) {
      console.log(array, a, b, r, l);
      if (array[a] < array[r]) {
        temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        b++;
      }
      a++;
    }
    temp = array[b];
    array[b] = array[r];
    array[r] = temp;
    partition(array, l, b - 1);
    partition(array, b + 1, r);
  }
}
