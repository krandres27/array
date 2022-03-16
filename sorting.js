const stringArray = ['hello', 'talking', 'native', 'kids']

const sortByStringLenght = targetArray => {
  return [...targetArray].sort((firstElement, secondElement) => {
    return firstElement.length - secondElement.length
  })
}

console.log(sortByStringLenght(stringArray))

