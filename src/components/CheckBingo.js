//ビンゴ判定
const checkBingo = (tasks) => {
  if (!tasks) {
    return false;
  } else {

    // ビンゴ判定用の配列
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const colums = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonals = [[0, 4, 8], [2, 4, 6]];

    // 行の判定
    for (let i = 0; i < rows.length; i++) {
      if (tasks.status[rows[i][0]] === 1 && tasks.status[rows[i][1]] === 1 && tasks.status[rows[i][2]] === 1) {
        return true;
      }
    }
    // 列の判定
    for (let i = 0; i < colums.length; i++) {
      if (tasks.status[colums[i][0]] === 1 && tasks.status[colums[i][1]] === 1 && tasks.status[colums[i][2]] === 1) {
        return true;
      }
    }
    // 斜めの判定
    for (let i = 0; i < diagonals.length; i++) {
      if (tasks.status[diagonals[i][0]] === 1 && tasks.status[diagonals[i][1]] === 1 && tasks.status[diagonals[i][2]] === 1) {
        return true;
      }
    }
  }
  return false;
};
export default checkBingo;