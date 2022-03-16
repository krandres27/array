const stringArray = ['hello', 'talking', 'native', 'kids']

const getNumberOfVowels = word => {
  wordArray = word.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return wordArray.reduce((number, letter) => {
    if (vowels.includes(letter)) number++
    return number
  }, 0)
}

const countedArray = stringArray.map(word => ({
  word,
  vowelsCount: getNumberOfVowels(word)
}))

countedArray