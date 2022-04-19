const SIZE = 101;
function divisionHash(val, m = SIZE) {
  // m for hash table size
  // similar input result in similar result
  return val % m;
}

function multiplicationHash(val, m = SIZE) {
  // m for hash table size
  // use the random nature of irrational number
  const A = (Math.sqrt(5) - 1) / 2;
  return Math.floor(m * ((val * A) % 1));
}

class HashTable {
  constructor(size = SIZE) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table.push([]);
    }
  }

  hash(key) {
    return multiplicationHash(key, this.size);
  }
  get(key) {
    const ind = this.hash(key);

    for (let collisionObj of this.table[ind]) {
      if (collisionObj.key === key) {
        return collisionObj.val;
      }
    }
  }
  set(key, val) {
    const ind = this.hash(key);
    this.table[ind].push({ key, val }); // once the collision happens
  }
  printAll() {
    console.log(this.table);
  }
}

module.exports = { divisionHash, multiplicationHash, HashTable };
