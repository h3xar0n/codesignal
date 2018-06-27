function minesweeper(matrix) {
    // initialize number matrix
    let numbermatrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
    
    console.log(numbermatrix);
    
    for (let row = 0; row < matrix.length; row++) {
        for (let cell = 0; cell < matrix[row].length; cell++) {
            if (matrix[row][cell] === true) {
                console.log(row + ', ' + cell + ' :');
                if (cell > 0) {
                    numbermatrix[row][cell - 1]++;
                    console.log(numbermatrix);
                }
                if (cell < (matrix[row].length - 1)) {
                    numbermatrix[row][cell + 1]++;
                    console.log(numbermatrix);
                }
                if (row > 0) {
                    numbermatrix[row - 1][cell]++;
                    console.log(numbermatrix);
                }  
                if (row < (matrix.length - 1)) {
                    numbermatrix[row + 1][cell]++;
                    console.log(numbermatrix);
                }
            }
        }
    }
    
    return numbermatrix;
}