function arrayMaximalAdjacentDifference(inputArray) {

    let greatestDiff = 0;

    for (let i = 0; i < (inputArray.length - 1); i++) {
        let testDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (testDiff > greatestDiff) {
            greatestDiff = testDiff;
        }
    }

    return greatestDiff;
}