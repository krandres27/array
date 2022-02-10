const numbers = [10, 20, 30, 40, 50];

// reduce
console.log(numbers.reduce((total, value) => total + value, 0));

// get average
console.log(numbers.reduce((avg, value, _, origianl) => avg + (value / origianl.length), 0));

// concat
const dummyArray = ['Alice', 'Bob', 'Tiff', 'Brucee', 'Alice'];
console.log(dummyArray.reduce((current, value) => `${current}${current && ','} ${value}`, ''))

// creating a new array with a different size
const groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];

console.log(groups.reduce((current, [count, value]) => {
  for(let index = 0; index < count; index++) {
    current.push(value)
  }
  return current
}, []));

console.log(groups.reduce((current, [count, value]) => [...current, ...Array(count).fill(value)], []));
  
const numbersDummy = [10, 20, 20, 30, 30, 30, 40, 50];

// count the repeated times of a number
console.log(numbersDummy.reduce((current, value) => {
  current[value] = (current[value] ?? 0) + 1;
  return current
}, {}));

// get the min and max
console.log(numbersDummy.reduce((current, value) => {
  return {
    min: Math.min(current['min'], value),
    max: Math.max(current['max'], value)
  }
}, { min: 0, max: 0}));

// includes
console.log(numbersDummy.reduce((current, value) => current ? current : value === 10, false))

// Values
// using values to create a function that sums the values from and object and an array

const testObject = {
  mike: 1,
  Johnie: 3,
  Paul: 2
}

function sumObjAndArray(objOrArray) {
  return Object.values(objOrArray).reduce((current, value) => current + value, 0)
}

console.log(sumObjAndArray(numbersDummy))
console.log(sumObjAndArray(testObject))


