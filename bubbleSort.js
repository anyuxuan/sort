/**
 * 
 * @param {*} arr number[]
 * @param {*} callback (a: number, b: number) => number
 */

const bubbleSort = (arr, callback) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pos = arr.length;
  while (pos > 0) {
    for (let i = 0; i < pos; i++) {
      let compare = arr[i] - arr[i + 1];
      if (callback && typeof callback === 'function') {
        compare = callback(arr[i], arr[i + 1]);
      }
      if (compare > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    pos--;
  }
  return arr;
}