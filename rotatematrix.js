function rotateMatrix(matrix) {
    const rotated = [];
    for (let i=0; i<matrix[0].length; i++){
        rotated.push([]);
        for(let j=0; j<matrix.length; j++){
            rotated[i].push(matrix[j][i]);
        }
    }
    return rotated;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3],
];

console.log(rotateMatrix(matrix));
