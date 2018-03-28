const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pos = arr.length;
  while (pos > 0) {
    for (let i = 0; i < pos; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    pos--;
  }
  return arr;
}