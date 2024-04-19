var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  const dfs = (row, col) => {
    // Check if out of bounds or water
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // Mark visited
    grid[row][col] = "0";

    // Explore neighbors
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  // Iterate through the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        dfs(row, col);
        count++;
      }
    }
  }

  return count;
};

