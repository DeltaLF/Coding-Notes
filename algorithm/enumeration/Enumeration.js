// Enumeration
// [x]/[y][z] +  [x2]/[y2][z2] + [x3]/[y3][z3] =1

(function enumeration() {
  function comp(a, b, c) {
    return a / (10 * b + c);
  }
  const x = [];
  for (let d = 0; d < 10 ** 10; d++) {
    let num = d.toString();
    for (let i = 0; i < 9; i++) {
      x[i] = num[i] ? num[i] : 0;
    }
    //console.log(x)
    let result =
      comp(x[0], x[1], x[2]) + comp(x[3], x[4], x[5]) + comp(x[6], x[7], x[8]);
    if (result === 1) {
      console.log(x);
      break;
    }
  }
})();
