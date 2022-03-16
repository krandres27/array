const addToArray = (targetArray, newValue) => {
  // return targetArray.concat([newValue])
  return [...targetArray, newValue]
}

const removeFromArray = (targetArray, indexToRemove) => {
  return [
    ...targetArray.slice(0, indexToRemove),
    ...targetArray.slice(indexToRemove + 1),
  ]
}

const incrementItem = (targetArray, indexToIncremet) => {
  if (!indexToIncremet) return targetArray
  return [
    ...targetArray.slice(0, indexToIncremet),
    targetArray[indexToIncremet] + 1,
    ...targetArray.slice(indexToIncremet + 1),
  ]
}

let newArray = addToArray([0, 2, 5, 7], 1)
console.log(newArray)
let cosa = removeFromArray([0, 2, 5, 7], 1)
console.log(cosa)
let cosa1 = incrementItem([1, 2, 4, 7],)
console.log(cosa1)

newArray = [...newArray, ...cosa1].sort()
const test = newArray.reduce((notRepeatedItems, current) => {
  const alreadyExist = notRepeatedItems.includes(current)
  if (!alreadyExist) notRepeatedItems.push(current)
  return notRepeatedItems
}, [])
