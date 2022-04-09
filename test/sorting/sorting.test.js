const sortFunc = require("./../../algorithm/sorting/sorting");
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
      const array = arrayOriginal.slice(0);
      sortFunction(array);
      let preVal = array[0];
      for (let val of array) {
        if (val < preVal) {
          flag = false;
          break;
        }
        preVal = val;
      }
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
});
