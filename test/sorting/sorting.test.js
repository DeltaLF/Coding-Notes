const sortFunc = require("./../../algorithm/sorting/sorting");
const arrayOne = [1];
const arrayTwo = [2, 1];
const array = [1, 10, 2, 5, 6, 21];
const arrayReverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arrayDuplicated = [-1, 3, 3, 3, 3, 3, 3];
const arrayDuplicatedReverse = [5, 5, 5, 5, 5, 5, 1];

const total = [
  arrayOne,
  arrayTwo,
  array,
  arrayReverse,
  arrayDuplicated,
  arrayDuplicatedReverse,
];

describe("sorting", () => {
  test("insertSort", () => {
    let flag = true;
    const totalCopy = total.splice(0);
    console.log("total copy:", totalCopy);
    for (let array of totalCopy) {
      console.log("array before", array);
      sortFunc.insertSort(array);
      let preVal = array[0];
      console.log("array after", array);
      for (let val of array) {
        console.log("val:", val, " preVal:", preVal);
        if (val < preVal) {
          flag = false;
          break;
        }
        preVal = val;
      }
      if (!flag) break;
    }
    expect(flag).toBe(true);
  });

  test("bubbleSort", () => {
    let flag = true;
    const totalCopy = total.splice(0);
    console.log("total copy:", totalCopy);
    for (let array of totalCopy) {
      console.log("array before", array);
      sortFunc.bubbleSort(array);
      let preVal = array[0];
      console.log("array after", array);
      for (let val of array) {
        console.log("val:", val, " preVal:", preVal);
        if (val < preVal) {
          flag = false;
          break;
        }
        preVal = val;
      }
      if (!flag) break;
    }
    expect(flag).toBe(true);
  });
});
