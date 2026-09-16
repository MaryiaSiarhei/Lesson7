// Напишите функцию, которая найдет максимальное и минимальное число в массиве

const array: number[] = [5, 2, -4, -8, 23, 55, 34, 0, 8];
function compareNum() {
  if (!array.length) {
    return { max: undefined, min: undefined };
  }
  let max = array[0] as number;
  let min = array[0] as number;
  for (const item of array) {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }
  return { max, min };
}
console.log(compareNum());
