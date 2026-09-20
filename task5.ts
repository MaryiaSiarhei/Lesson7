// Написать функцию, которая разворачивает вложенные массивы в один
const array = [1, [2, 3], [4], 5, [6, 7, 8]];

//const result = [1, 2, 3, 4, 5, 6, 7, 8];

function recursiveFlatten(arr: unknown[]): number[] {
  const result: number[] = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      const flatSubArray = recursiveFlatten(element as unknown[]);
      for (const subElement of flatSubArray) {
        result.push(subElement);
      }
    } else if (typeof element === "number") {
      result.push(element);
    }
  }
  return result;
}
console.log(recursiveFlatten(array));
