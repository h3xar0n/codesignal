function matrixElementsSum(matrix) {
    for (var r = 0, j = 0; j < matrix[0].length; j++) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === 0) break
            else r += matrix[i][j]
        }
    }
    return r;
}