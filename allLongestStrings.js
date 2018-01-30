function allLongestStrings(inputArray) {
    var output = [];
    var longest = 0;
    // find longest length
    for (var i = 0; i < inputArray.length; i++) {
        if (longest < inputArray[i].length) longest = inputArray[i].length;
    }
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longest) {
            output.push(inputArray[i]);
        }
    }
    return output;
}