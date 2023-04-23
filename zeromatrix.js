function zeroMatrix (matrix) {
    const zeroPos = [];
    for (let i = 0; i<matrix.length; i++){
        for (let j = 0; j<matrix[i].length; j++){
            if (matrix[i][j] == 0) {
                zeroPos.push([i, j]);
            }
        }
    }
    for (let k = 0; k<zeroPos.length; k++){
        for (let j = 0; j < matrix[zeroPos[k][0]].length; j++){
            matrix[zeroPos[k][0]][j] = 0;
        }
        for (let j = 0; j < matrix.length; j++){
            matrix[j][zeroPos[k][1]] = 0;
        }
    }
    return matrix;
}

const matrix = [
    [1, 2, 3],
    [1, 9, 0],
    [1, 0, 3],
    [1, 2, 3],
]
console.log(zeroMatrix(matrix));