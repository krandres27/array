function getLongestString(arrayOfStrings) {
  if (!arrayOfStrings.length) throw new Error('please provide an array of strings')
  return arrayOfStrings.reduce((string, currentString) => string.length >= currentString.length ? string : currentString, '')
}

console.log(getLongestString(['hello', 'back', 'computer']))
console.log(getLongestString(['hello', 'back', 'computer', 'komputer']))