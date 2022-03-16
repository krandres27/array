(function() {
  for (base = 1; base <= 10; base++) {
    for (multiplier = 0; multiplier <= 10; multiplier++) {
      console.log(`${base} x ${multiplier} = ${base * multiplier}`)
    }
    console.log('.............................................')
  }
})()