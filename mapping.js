const numbers = [10, -20, 30, -40, 50];

// map for scalars
console.log(numbers.map(number => number + 10));

// mapping and returning a new type
console.log(numbers.map(number => ({ value: number + 10 })));

// map for objects
const people = [
  { name: "Alice", last: 'Smith', address: { number: "123" } },
  { name: "Bob", last: 'Joe', address: { number: "456" } },
  { name: "Tiff", last: 'Kant', address: { number: "789" } },
];

// in here the first level object has been cloned but the inner one 'address' has not, and it keeps the same reference
console.log(people.map(item => ({
  ...item,
  fullname: `${item.name} ${item.last}`
})))


// from
// this method actullay wokrs as a map as well, but it can work
// with another type of data like a Set
console.log(Array.from(numbers, (item) => item * 10));


// flat
let numbersNested = [[10, -20], [30], [-40, 50]];
console.log(numbersNested.flat());

// if nested elements are more
numbersNested = [[[10], [-20]], [30], [[-40], [50]]];
console.log(numbersNested.flat(2));

// if nested elements are several
numbersNested = [[[[[10], [-20]], [30], [[-40], [50]]]]];
console.log(numbersNested.flat(Infinity));
