function countDown(num) {
  console.log(num)
  if (num >= 1) {
    num = num - 1
    countDown(num)
  }
}

countDown(3)

function sortArray(targetArray) {
  let sorted = true
  let array = []
  
  if (!sorted) {
    array = targetArray.reduce((compiled, current, index) => {
      if (targetArray[index + 1]) {
        if (current > compiled[index + 1]) {
          compiled[index] = compiled[index + 1]
          compiled[index + 1] = current
          sorted = false
        } 
      }
      console.log(compiled)
      return compiled
    }, [...targetArray])
    console.log(array)
    sortArray(array)
  }

  return array

}

const cosa3 = sortArray([3, 1, 2])