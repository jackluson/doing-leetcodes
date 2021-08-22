let arr = [10, 80, 60, 30, 90, 40, 50, 70];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
};

selectionSort(arr);

console.log(arr);
