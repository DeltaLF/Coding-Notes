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
