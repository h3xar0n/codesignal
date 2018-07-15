function evenDigitsOnly(n) {
  const digits = n.toString(10).split("").map(Number)
  
  let evenOnly = true
  
  digits.forEach((digit) => {
      if (digit % 2 !== 0){ 
          evenOnly = false
      }
  })
  
  return evenOnly
}

// split the integer into an erray
// itirate through the array, check if each one is divisble by 2
// in the iteration, if not, return false
// at the bottom, return true