function boxBlur(image) {
  let result = [];
  for (let i = 0; i < (image.length - 2); i++) {
      let blockaverage = [];
      for (let j = 0; j < (image[i].length - 2); j++) {
          let average1 = image[i][j] + image[i][j+1] + image[i][j+2];
          let average2 = image[i+1][j] + image[i+1][j+1] + image[i+1][j+2];
          let average3 = image[i+2][j] + image[i+2][j+1] + image[i+2][j+2];
          let finalaaverage = (average1 + average2 + average3) / 9;      
          blockaverage.push(Math.floor(finalaaverage));
      }
      result.push(blockaverage);
  }
  return result;
}
