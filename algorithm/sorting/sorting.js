// worse performance sorting algorithm
let arrayOne = [1];
let arrayTwo = [2, 1];
let array = [1, 10, 2, 5, 6, 21];
let arrayReverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arrayDuplicated = [-1, 3, 3, 3, 3, 3, 3];
let arrayDuplicatedReverse = [5, 5, 5, 5, 5, 5, 1];

module.exports = { bubbleSort, insertSort, selectSort };

function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length - 1; i++) {
    let swappedFlag = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swappedFlag = true;
      }
    }
    if (!swappedFlag) {
      break;
    }
  }
  console.log(array);
  return array;
}

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let newNumber = array[i];
    let j = i - 1;
    while (j >= 0 && newNumber < array[j]) {
      array[j + 1] = array[j];
      array[j] = newNumber;
      newNumber = array[j];
      j--;
    }
  }

  console.log(array);
  return array;
}

function selectSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = Infinity;
    let ind = -1;
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        ind = j;
      }
    }
    array[ind] = array[i];
    array[i] = min;
  }
  console.log(array);
  return array;
}
