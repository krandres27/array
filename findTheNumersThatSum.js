// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
const getPositionThatSum = (targetArray, sum) => {
  const indexes = []

  for (let i= 0; i < targetArray.length; i++) {
    let accu = 0
    
    for(let j= i; j < targetArray.length && indexes.length === 0; j++) {
      accu = accu + targetArray[j]
      if (accu === sum) {
        indexes.push(i)
        indexes.push(j)
        break;
      }
    }
    
  }
  
  return indexes
}

console.log(getPositionThatSum([1,2,3,7,5], 12))
console.log(getPositionThatSum([1,2,3,4,5,6,7,8,9,10], 15))

// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
const sumTriplets = (targetArray) => {
  let accu = 0

  for (let i= 0; i < targetArray.length; i++) {
    
    for(let j= i + 1; j < targetArray.length; j++) {
      const sum = targetArray[i] + targetArray[j]
      console.log(sum)

      if (targetArray.includes(sum)) {
        ++accu
      }
    }
    
  }
  
  return accu
}

console.log(sumTriplets([1, 5, 3, 2]))
console.log(sumTriplets([2, 3, 4]))

// merge to sorted arrays

function mergeSortedArrays(array1, array2) {
  return [...array1, ...array2].sort()
}

console.log(mergeSortedArrays([1, 3, 5, 7], [0, 2, 6, 8, 9]))


// Given an array of integers. Find the Inversion Count in the array. 
// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.

const getInversions = (targetArray) => {
  let accu = 0

  for (let i= 0; i < targetArray.length; i++) {
    
    for(let j= i + 1; j < targetArray.length; j++) {
      targetArray[i] > targetArray[j] && i < j && ++accu
    }
    
  }
  
  return accu
}

console.log(getInversions([4, 3, 2, 1]))
console.log(getInversions([2, 4, 1, 3, 5]))
console.log(getInversions([5, 5, 5]))

// Given a string S consisting only '0's and '1's,  find the last index of the '1' present in it.

const getLasOneIndex = (targetString) => {
  return targetString.split('').indexOf('1')
}

console.log(getLasOneIndex('00001'))