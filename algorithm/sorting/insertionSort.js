let arrayOne = [1];
let arrayTwo = [2, 1];
let array = [1, 10, 2, 5, 6, 21];
let arrayReverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arrayDuplicated = [-1, 3, 3, 3, 3, 3, 3];
let arrayDuplicatedReverse = [5, 5, 5, 5, 5, 5, 1];

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
}

insertSort(arrayOne);
insertSort(arrayTwo);
insertSort(array);
insertSort(arrayReverse);
insertSort(arrayDuplicated);
insertSort(arrayDuplicatedReverse);
