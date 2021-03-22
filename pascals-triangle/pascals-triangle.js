export const rows = numbOfRows => {
  let result = [];

  for (let i = 0; i < numbOfRows; i++) {
    let row = [];

    for (let j = 0; j <= i; j++){
      (j === 0 || j === i)
        ? row.push(1)
        : row.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    result.push(row);
  }
  return result;
};