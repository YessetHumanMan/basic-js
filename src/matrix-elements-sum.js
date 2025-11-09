function getMatrixElementsSum(matrix) {
  let sum = 0;
  const bannedCols = new Set();

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (bannedCols.has(c)) continue;
      if (matrix[r][c] === 0) { bannedCols.add(c); continue; }
      sum += matrix[r][c];
    }
  }
  return sum;
}

module.exports = { getMatrixElementsSum };

