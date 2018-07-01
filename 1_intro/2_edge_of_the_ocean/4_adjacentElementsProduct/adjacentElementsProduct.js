function adjacentElementsProduct(inputArray) {
    var biggest = inputArray[0] * inputArray[1],
        second = inputArray[1] * inputArray[2],
        len = inputArray.length;
    if (biggest < second) {
        biggest = inputArray[1] * inputArray[2];
        second = inputArray[0] * inputArray[1];
    }
    for (i = 2; i < len; i++) {
        var check = inputArray[i] * inputArray[i+1];
        if (check > biggest){
            second = biggest;
            biggest = check;
        }
        else if (check > second) {
            second = check;
        }
    }
    return biggest;
}
