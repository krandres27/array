// for - it is good for data creation
const newArray = [];
for (let index=0; index < 10; index++) {
  newArray.push(`item ${index}`);
}
console.log(newArray);

// for - not good to iterate data
// many errors can appear just by changing any variable
for (let index=0; index < newArray.length; index++) {
  console.log(newArray[index])
}

// INSTEAD IT IS BETTER TO USE

// for in
// is going to give the index on each iteration
// so less typos or incorrect validations can appear here
// a break can be used here
// is going to wait for async code
for (const index in newArray) {
  if (index > 4) break;
  console.log(newArray[index])
}

// for of
// is going to give the actual value on each iteration
// so less typos or incorrect validations can appear here
// a break can be used here
// is going to wait for async code
for (const value of newArray) {
  if (value === 'item 3') break;
  console.log(value)
}

// forEach
// good for iteration but
// a break can not be used here
// is not going to wait for async code, will do everything parallel
newArray.forEach((item, index) => {
  console.log(item, index)
});



//////////////// Async code
function getById(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Got ${id}`)
      resolve(id);
    }, 1000);
  });
}

const ids = [1,2,3];


(async () => {
  // for of
  // is going to wait for async code
  for (const id of ids) {
    await getById(id);
  };
  
  // forEach
  // is not going to wait for async code, will do everything parallel
  ids.forEach(async (id) => {
    await getById(id);
  });
})()





