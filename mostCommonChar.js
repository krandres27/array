function getMostCommonChar(targetString) {
  const stringArray = targetString.split('')
  
  const charCount = stringArray.reduce((count, current) => {
    return { ...count, [current]: count[current] + 1 || 1 }
  }, {})

  let commonValue = 0
  let commonChar = ''
  Object.keys(charCount).forEach(key => {
    if (charCount[key] > commonValue) {
      commonValue = charCount[key]
      commonChar = key
    }
  })

  return commonChar
}

console.log(getMostCommonChar('character'))