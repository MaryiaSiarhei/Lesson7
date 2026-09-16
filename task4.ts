// Написать функцию, которая возвращает объект в виде ключ (элемент массива) и значение (сколько раз элемент повторяется)

const array: string[] = ["orange", "apple", "banana", "apple", "orange", "orange"];

//const result: Record<string, number> = { orange: 3, apple: 2, banana: 1 };

function countEl(arr: string[]) {
  const counterObj: Record<string, number> = {};
  for (const el of arr) {
    if (!counterObj[el]) {
      counterObj[el] = 1;
    } else {
      counterObj[el] += 1;
    }
  }
  return counterObj;
}
console.log(countEl(array));
