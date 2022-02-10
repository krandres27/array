const dummyArray = ['Alice', 'Bob', 'Tiff', 'Brucee', 'Alice'];

// destructuring
const [first, second, ...rest] = dummyArray;
console.log(first);
console.log(second);
console.log(rest);

// creating copies
// if it is an array full of obkject or other arrays
// it would need a deepCopy
const numbersCopy = [...dummyArray];

// finding indexes

// indexOf
// this is more performant than findIndex
console.log(dummyArray.indexOf('Alice'));
// same search but after an specific index
console.log(dummyArray.indexOf('Alice', 1));
// lastIndexOf
console.log(dummyArray.lastIndexOf('Alice'));
// it does not exists so the -1
console.log(dummyArray.indexOf('Sally'));

// findIndex
// it accepts a function to validate if an item exists
console.log(dummyArray.findIndex(item => item === 'Tiff'));

// finding an item
const people = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Tiff' }];
console.log(people.find(item => item.name === 'Tiff'))

const numbers = [10, -20, 30, -40, 50];

// includes
console.log(numbers.includes(-20))
console.log(numbers.includes(-60))

// some
console.log(numbers.some(number => number > 0))

// every
console.log(numbers.every(number => number > 0))