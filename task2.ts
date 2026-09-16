// Написать функцию, которая проверяет является ли слово палиндромом

const word1 = "Анна";
const word2 = "Кабак";
const word3 = "Кот";
function isPalindrome(word: string): boolean {
  const normal = word.toLowerCase();
  const reversed = normal.split("").reverse().join("");
  return normal === reversed;
}
console.log(`${word1} - palindrome: ${isPalindrome(word1)}`);
console.log(`${word2} - palindrome: ${isPalindrome(word2)}`);
console.log(`${word3} - palindrome: ${isPalindrome(word3)}`);
