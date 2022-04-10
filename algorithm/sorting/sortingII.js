// better performance sorting algrithm

module.exports = { mergeSort };

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
