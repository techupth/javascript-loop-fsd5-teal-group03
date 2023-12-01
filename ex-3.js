// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
// Start coding here

for (let i of numbers) {
  if (minNumber === undefined || minNumber > i) minNumber = i;
}

console.log(minNumber);
