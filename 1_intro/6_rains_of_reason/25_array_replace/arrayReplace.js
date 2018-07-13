function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const outputArray = []
  inputArray.forEach(elem => {
      if (elem === elemToReplace) {
          outputArray.push(substitutionElem)
      }
      else {
          outputArray.push(elem)
      }
  })
  return outputArray;
}
