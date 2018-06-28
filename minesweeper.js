function minesweeper(matrix) {
    const board = [];
    const matrixLength = matrix.length;
    
    // figure out how to do with forEach
    // matrix.forEach((row) => {
    //     let rowLength = row.length;
    //     let newRow = [];
    //     row.forEach((cell) => {
    //         newRow.push(clockCheck(matrix, matrixLength, row, rowLength, cell));
    //     });
    //     board.push(newRow);
    // })
    
    for (let i = 0; i < matrixLength; i++) {
        let oldRow = matrix[i];
        let rowLength = oldRow.length;
        let newRow = [];
        for (let j = 0; j < rowLength; j++) {
            newRow.push(clockCheck(matrix, matrixLength, i, rowLength, j));
        }
        board.push(newRow);
    }
    return board;
}

function clockCheck(matrix, matrixLength, matrixIndex, rowLength, rowIndex) {
    
    let cellValue = { value: 0 };
    
    // check conditions of surroundings
    const hasRowAbove = matrixIndex > 0;
    const hasRowBelow = matrixIndex < matrixLength - 1;
    const hasColumnLeft = rowIndex > 0;
    const hasColumnRight = rowIndex < rowLength - 1;
    
    // assign indices for surroundings
    const top = matrixIndex - 1;
    const bottom = matrixIndex + 1;
    const left = rowIndex - 1;
    const right = rowIndex + 1;
    
    // check directly left
    if (hasColumnLeft) {
        cellCheck(matrix, cellValue, matrixIndex, left);
    }
    
    // check directly right
    if (hasColumnRight) {
        cellCheck(matrix, cellValue, matrixIndex, right);
    }
    
    // check all above
    if (hasRowAbove) {
        
        //check directly above
        cellCheck(matrix, cellValue, top, rowIndex);
    
        //check top-left
        if (hasColumnLeft) {
            cellCheck(matrix, cellValue, top, left);
        }
               
        //check top-right
        if (hasColumnRight) {
            cellCheck(matrix, cellValue, top, right);
        }
    }
    
    // check all below
    if (hasRowBelow) {
        
        //check directly below
        cellCheck(matrix, cellValue, bottom, rowIndex);
    
        //check bottom-left
        if (hasColumnLeft) {
            cellCheck(matrix, cellValue, bottom, left);
        }
               
        //check bottom-right
        if (hasColumnRight) {
            cellCheck(matrix, cellValue, bottom, right);
        }
    }
    
    return cellValue.value;
}

function cellCheck(matrix, cellValue, vertical, horizontal) {
    if (matrix[vertical][horizontal]) {
        cellValue.value++;
    }
}