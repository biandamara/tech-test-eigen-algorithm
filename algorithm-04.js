function subtraction() {
  let diagonal01 = 0;
  let diagonal02 = 0;

  // Looping pertama untuk menjumlahkan diagonal 01
  for (let i = 0; i < matrix.length; i++) {
    diagonal01 += matrix[i][i];

    // console.log(diagonal01);
  }

  // Looping kedua untuk menjumlahkan diagonal 02
  for (let i = 0; i < matrix.length; i++) {
    diagonal02 += matrix[i][matrix.length - 1 - i];

    // console.log(diagonal02);
  }

  // pengurangan diagonal 01 dengan diagonal 02
  return Math.abs(diagonal01 - diagonal02); // nilai absolut
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(subtraction(matrix));
