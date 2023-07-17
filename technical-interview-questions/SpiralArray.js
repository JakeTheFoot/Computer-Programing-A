function snail(array) {
  let result = [];
  let startRow = 0,
    endRow = array.length - 1;
  let startCol = 0,
    endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Traverse right
    for (let i = startCol; i <= endCol; i++) {
      result.push(array[startRow][i]);
    }
    startRow++;

    // Traverse down
    for (let i = startRow; i <= endRow; i++) {
      result.push(array[i][endCol]);
    }
    endCol--;

    // Traverse left
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(array[endRow][i]);
      }
      endRow--;
    }

    // Traverse up
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(array[i][startCol]);
      }
      startCol++;
    }
  }

  return result;
}

console.log(
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);

describe("snail", () => {
  it("should return the elements of the input array in a clockwise spiral order", () => {
    const input = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actualOutput = snail(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
