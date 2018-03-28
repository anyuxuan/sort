/**
 * 
 * @param {*} arr number[]
 * @param {*} callback (a: number, b: number) => number
 */

const quickSort = (arr, callback) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middleIndex = Math.round(arr.length / 2);
  const middleValue = arr.splice(middleIndex, 1)[0];
  const left = [];
  const right = [];
  arr.forEach(item => {
    let compare = item - middleValue;
    if (callback && typeof callback === 'function') {
      compare = callback(item, middleValue);
    }
    if (compare < 0) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return [...quickSort(left, callback), middleValue, ...quickSort(right, callback)];
}