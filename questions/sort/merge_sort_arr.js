function mergeSortArray(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < b.length; j++) {
      if (a[i] < b[j]) {
        for (let z = a.length + i; z > j; z--) {
          b[z] = b[z - 1];
        }
        b[j] = a[i];
        break;
      }
    }
  }
  return b;
}

var a = [1, 3, 5, 7];
var b = [2, 4, 6, 8, "-", "-", "-", "-"];

console.log(mergeSortArray(a, b));
