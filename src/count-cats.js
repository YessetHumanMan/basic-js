/**
 * Count '^^' in 2D array
 */
function countCats(matrix) {
  if (!Array.isArray(matrix)) return 0;
  let cnt = 0;
  for (const row of matrix) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) if (cell === '^^') cnt++;
  }
  return cnt;
}

module.exports = { countCats };

