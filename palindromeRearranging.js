function palindromeRearranging(inputString) {    
    let stringLength = inputString.length;
    let stringEven = true;
    if (stringLength % 2 !== 0) stringEven = false;
    
    let letterRecord = {};
    
    for (let i = 0; i < stringLength; i++) {
        if (inputString[i] in letterRecord) letterRecord[inputString[i]]++;
        else letterRecord[inputString[i]] = 1;  
    }
    
    // stringEven
    let oddLetters = 0;
    
    for (var letter in letterRecord) {
        if (letterRecord[letter] % 2 !== 0) oddLetters++;
        if (stringEven && oddLetters > 0) { return false; }
        if (stringEven === false && oddLetters > 1) { return false; }
    }
    
    return true;
}
