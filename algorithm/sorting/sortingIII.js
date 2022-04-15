// npn-comparative sorting algorithm
let array = [1, 10, 2, 5, 6, 21, 3];

module.exports = { countingSort, radixSort };

function countingSort(array) {
  // assume input value < 50
  // make a size 50 table
  // index (i) map to array value array[j] and number(in array) count is table value (table[i])
  const table = new Array(50).fill(0);
  for (let num of array) {
    table[num] += 1;
  }
  const result = [];

  for (let i = 0; i < table.length; i++) {
    while (table[i] > 0) {
      result.push(i);
      table[i] -= 1;
    }
  }
  return result;
}

console.log(radixSort(array));

function radixSort(array) {
  // assume all numbers are < 100 & >-1
  // LST start from Least Significant Digit
  // MST strat from Most Significant Digit
  function num2dig(n, d) {
    //  d = 10 100 1000..
    //console.log(`n:${n}, d:${d}, result ${Math.floor((n % d) / (d / 10))}`);
    return Math.floor((n % d) / (d / 10));
  }

  for (let d = 0; d < 2; d++) {
    // d: 10**0 10**1 10**2

    const bucket = {};
    const result = [];
    const digit = 10 ** (d + 1);
    array.forEach((num) => {
      if (bucket[num2dig(num, digit)]) {
        bucket[num2dig(num, digit)].push(num);
      } else {
        bucket[num2dig(num, digit)] = [num];
      }
    });
    for (let i = 0; i < 10; i++) {
      if (bucket[i]) {
        // while (bucket[i].length > 0) {
        //   result.push(bucket[i].shift()); // don't use shift
        // }
        let j = 0;
        while (j < bucket[i].length) {
          result.push(bucket[i][j]);
          j += 1;
        }
      }
    }
    array = result;
  }
  return array;
}
