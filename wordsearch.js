const transpose = (matrix) => {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;

  const vertical = transpose(letters).map((ls) => ls.join(""));
  const horizontal = letters.map((ls) => ls.join(""));
  
  for (l of horizontal) {
    if (l.includes(word)) return true;
  }

  for (l of vertical) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
