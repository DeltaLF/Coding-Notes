const SIZE = 101;
function divisionHash(val, m = SIZE) {
  // m for hash table size
  // similar input result in similar result
  return val % m;
}
console.log(divisionHash(100209));
console.log(divisionHash(100210));
console.log(divisionHash(100211));

function multiplicationHash(val, m = SIZE) {
  // m for hash table size
  // use the random nature of irrational number
  const A = (Math.sqrt(5) - 1) / 2;
  return Math.floor(m * ((val * A) % 1));
}

console.log(multiplicationHash(100209));
console.log(multiplicationHash(100210));
console.log(multiplicationHash(100211));

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
    return null;
  }
  set(key, val) {
    const ind = this.hash(key);
    this.table[ind].push({ key, val }); // once the collision happens
  }
  printAll() {
    console.log(this.table);
  }
}

let hash = new HashTable(20);
hash.set(13579, "Jake");
hash.set(3984, "Finn");
hash.set(231, "Rigby");
console.log(hash.get(3984));
hash.set(999, "Mordecai");
hash.set(5056, "Benson");
hash.printAll();
