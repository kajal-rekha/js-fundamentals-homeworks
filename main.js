//  01. Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

"Solution: 01";

for (let i = 1; i <= 100; i++) {
  const fizz = i % 3 === 0 ? "Fizz" : "";
  const buzz = i % 5 === 0 ? "Buzz" : "";
  console.log(fizz + buzz || i);
}

// 02. Write a program that takes an array of integers and returns the sum of all the numbers in the array that are greater than 10.

("Solution: 02");

const myArray = [12, 7, 15, 9, 11, 21, 14];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > 10) {
    sum += myArray[i];
  }
}

console.log(sum);

// 03. Write a program that takes an array of integers and returns the average of all the numbers in the array.

("Solution: 03");

let arr = [1, 2, 3, 4, 5, 6, 7];
let num = 0;

for (let i = 0; i < arr.length; i++) {
  num += arr[i];
}

let avg = num / arr.length;
console.log(avg);

// 04. You are a lumberjack and you have been tasked with cutting down trees in a forest. Each tree has a certain height, and you have been given a height threshold of 10. You can only cut down trees that are taller than the threshold.
// Write a program that takes an array of tree heights and outputs the total height of the trees that you can cut down.

("Solution: 04");

const treeHeights = [7, 5, 9, 13, 15, 18, 17];
const threshold = 10;
let totalCutHeight = 0;

for (let i = 0; i < treeHeights.length; i++) {
  if (treeHeights[i] > threshold) {
    totalCutHeight += treeHeights[i];
  }
}

console.log(totalCutHeight);
