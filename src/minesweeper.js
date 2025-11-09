function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = Array.from({ length: rows }, () => Array(cols).fill(0));

  const dirs = [
    [-1,-1],[-1,0],[-1,1],
    [0,-1],        [0,1],
    [1,-1],[1,0],[1,1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let cnt = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr>=0 && nr<rows && nc>=0 && nc<cols && matrix[nr][nc]) cnt++;
      }
      res[r][c] = cnt;
    }
  }
  return res;
}

module.exports = { minesweeper };

