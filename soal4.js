// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN 

function diagonalDifference(matrix) {
    const N = matrix.length;

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < N; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][N - i - 1];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Contoh matriks
const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];


const result = diagonalDifference(matrix);
console.log(result); 
