let arr = [10, 80, 60, 30, 90, 40, 50, 70];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log("arr", arr);
      }
    }
  }
};

const bubbleSort_op = (arr) => {
  let last_max_obj = {
    value: arr[0],
    ops: 0,
  };
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = last_max_obj.ops; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log("arr", arr);
        if (j !== arr.length - i - 2) {
          last_max_obj.ops = j + 1;
          last_max_obj.value = arr[j + 1];
          console.log("last_max_obj", last_max_obj);
        }
      }
    }
  }
};

bubbleSort_op(arr);

console.log(arr);
