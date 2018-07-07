// Many thanks to CodingTutorials360 for the solution
// If you're stuck, find it here: https://www.youtube.com/channel/UC5Wi_NYysX-LfcqT3Hq9Faw

function avoidObstacles(inputArray) {
  inputArray = inputArray.sort(function(a, b) {
      return a - b;
  });
  const ending = inputArray[inputArray.length - 1];
  for (let i = 1; i <= ending + 1; i++) {
      if (inputArray.every(function(element) {
          return element % i !== 0;
      })){
          return i;
      }
  }   
}
