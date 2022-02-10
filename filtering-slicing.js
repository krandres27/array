const numbers = [10, -20, 30, -40, 50];
const people = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Tiff' }];

// filter
console.log(numbers.filter(number => number > 0))

// filter object
console.log(people.filter(({ name }) => name.toLowerCase().startsWith('b')));

// filter by using the third param, the original Array
const rowNumbers = [1,2,3,5,6,7];
console.log(rowNumbers.filter((number, _, original) => original.includes(number + 1)))

// slice
console.log(rowNumbers.slice(1, 4))
// slice to get the last two items
console.log(rowNumbers.slice(-2))
// slice also works to get a copy of an array
console.log(rowNumbers.slice())
