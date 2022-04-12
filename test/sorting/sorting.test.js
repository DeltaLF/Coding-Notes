const sortFunc = require("./../../algorithm/sorting/sorting");
const sortFuncII = require("./../../algorithm/sorting/sortingII");
const arrayOne = [1];
const arrayTwo = [2, 1];
const array = [1, 10, 2, 5, 6, 21];
const arrayReverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arrayDuplicated = [-1, 3, 3, 3, 3, 3, 3];
const arrayDuplicatedReverse = [5, 5, 5, 5, 5, 5, 1];

const totalArray = [
  arrayOne,
  arrayTwo,
  array,
  arrayReverse,
  arrayDuplicated,
  arrayDuplicatedReverse,
];

describe("sorting", () => {
  function sortingTestFunc(sortFunction) {
    let flag = true;
    for (let arrayOriginal of totalArray) {
      const array = sortFunction(arrayOriginal.slice(0));
      //console.log("before:", arrayOriginal, "after:", array);
      const sortedArray = arrayOriginal.slice(0).sort(function (a, b) {
        return a - b;
      });
      sortedArray.forEach((num, ind) => {
        if (num !== array[ind]) {
          flag = false;
        }
      });

      if (!flag) break;
    }

    return flag;
  }

  test("insertSort", () => {
    const result = sortingTestFunc(sortFunc.insertSort);
    expect(result).toBe(true);
  });

  test("bubbleSort", () => {
    const result = sortingTestFunc(sortFunc.bubbleSort);
    expect(result).toBe(true);
  });

  test("selection Sort", () => {
    const result = sortingTestFunc(sortFunc.selectSort);
    expect(result).toBe(true);
  });

  test("merge sort", () => {
    const result = sortingTestFunc(sortFuncII.mergeSort);
    expect(result).toBe(true);
  });
  test("heap sort", () => {
    const result = sortingTestFunc(sortFuncII.heapSort);
    expect(result).toBe(true);
  });
});
