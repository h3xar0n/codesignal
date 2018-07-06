function isIPv4Address(inputString) {
    // turn input into array
    let testArray = (inputString).split('.');
    
    // if array does not have a length of 4, false
    if (testArray.length !== 4) return false;
    
    // iterate through array, checking if each number is between 0 and 255
    for (let i = 0; i < 4; i++) {
        if (isNaN(testArray[i]) === true) return false;
        if (testArray[i] === '') return false;
        if (testArray[i] > 255) return false;
        if (testArray[i] < 0) return false;
    }
    
    return true;
}
