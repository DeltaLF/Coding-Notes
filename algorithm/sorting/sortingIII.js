let array = [1, 10, 2, 5, 6, 21, 3];

module.exports = { countingSort };

console.log(countingSort(array));

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
