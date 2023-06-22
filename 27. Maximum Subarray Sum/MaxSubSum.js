function maxSequence1(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      let sumSubArray = arr.slice(i, j).reduce(function (a, e) {
        return a + e;
      });

      if (sumSubArray > max) {
        max = sumSubArray;
      }
    }
  }

  return max;
}

console.log(
  maxSequence1([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);

console.log(
  maxSequence1([
    44, -11, -18, 40, 42, -38, 1, -43, 3, 37, -35, -7, 6, 9, 2, -28, -18, -8,
    16, 43, 21, -21, -32, -49, 10, 10, 36, 26, 1, 34, -46, 27, -17, 33, -12, 30,
    -9, 15, -46, 20, -35, 6, 10, 37, 20, -5, 31, 25, -18, 1, -30, -19, -26, -16,
    -22, 16, 5, 16, -44, 6,
  ])
);

console.log(maxSequence1([4, 7, -20, -47, -10, 37]));


function maxSequence2(arr) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

console.log(
  maxSequence2([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);

console.log(
  maxSequence2([
    44, -11, -18, 40, 42, -38, 1, -43, 3, 37, -35, -7, 6, 9, 2, -28, -18, -8,
    16, 43, 21, -21, -32, -49, 10, 10, 36, 26, 1, 34, -46, 27, -17, 33, -12, 30,
    -9, 15, -46, 20, -35, 6, 10, 37, 20, -5, 31, 25, -18, 1, -30, -19, -26, -16,
    -22, 16, 5, 16, -44, 6,
  ])
);

console.log(maxSequence2([4, 7, -20, -47, -10, 37]));
