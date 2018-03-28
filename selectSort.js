/**
 * 
 * @param {*} arr number[]
 * @param {*} callback (a: number, b: number) => number
 */

const selectSort = (arr, callback) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < len; j++) {
      let compare = arr[minValueIndex] - arr[j];
      if (callback && typeof callback === 'function') {
        compare = callback(arr[minValueIndex], arr[j]);
      }
      if (compare > 0) {
        minValueIndex = j;
      }
    }
    if (i !== minValueIndex) {
      [arr[i], arr[minValueIndex]] = [arr[minValueIndex], arr[i]];
    }
  }
  return arr;
}