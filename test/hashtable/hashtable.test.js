const hashTable = require("./../../algorithm/hashtable/hashtable");

describe("Hash function", () => {
  const SIZE = 20;
  const idList = [
    123123, 1255467, 35362, 367125, 7843347, 3213654, 0, 4, 654, 56, 46, 54, 65,
    46, 54, 5, 99999, 500, 56645, 5465654,
  ];
  function checkHashFunction(hashFunc) {
    const hashArray = idList.map((id) => {
      return hashFunc(id, SIZE);
    });
    const result = hashArray.reduce((prev, curr) => {
      if (!isNaN(prev)) {
        prev = prev >= 0 && prev <= SIZE;
      }
      return prev && curr >= 0 && curr <= SIZE;
    });
    return result;
  }

  test("divide hash", () => {
    const result = checkHashFunction(hashTable.divisionHash);
    expect(result).toBe(true);
  });

  test("multiplication hash", () => {
    const result = checkHashFunction(hashTable.multiplicationHash);
    expect(result).toBe(true);
  });
});

describe("Hash table", () => {
  const hash = new hashTable.HashTable(20);
  hash.set(13579, "Jake");
  expect(hash.get(13579)).toBe("Jake");
  hash.set(3984, "Finn");
  hash.set(231, "Rigby");
  expect(hash.get(3984)).toBe("Finn");
  expect(hash.get(231)).toBe("Rigby");
  hash.set(999, "Mordecai");
  hash.set(5056, "Benson");
  expect(hash.get(999)).toBe("Mordecai");
  expect(hash.get(5056)).toBe("Benson");
  hash.printAll();
});
