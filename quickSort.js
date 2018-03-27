const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middleIndex = Math.round(arr.length / 2);
  const middleValue = arr.splice(middleIndex, 1)[0];
  const left = [];
  const right = [];
  arr.forEach(item => {
    if (item < middleValue) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return [...quickSort(left), middleValue, ...quickSort(right)];
}