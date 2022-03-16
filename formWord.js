function formWord(partA, partB) {
  const sanitizedPartA = partA.replace(/[^a-zA-Z ]/g, "")
  const sanitizedPartB = partB.replace(/[^a-zA-Z ]/g, "").split('').reverse().join('')

  return `${sanitizedPartA}${sanitizedPartB}`
}

console.log(formWord('java', 'tpi%rcs'))
console.log(formWord('c%ountry', 'edis'))