/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const rows = land.length;
    const cols = land[0].length;
    const results = [];
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (land[row][col] === 0) continue; // Skip forested land
        
        const topLeftRow = row;
        const topLeftCol = col;
        
        // Find bottom right corner
        while (row + 1 < rows && land[row + 1][col] === 1) {
          row++;
        }
        while (col + 1 < cols && land[row][col + 1] === 1) {
          col++;
        }
        
        results.push([topLeftRow, topLeftCol, row, col]);
      }
    }
    
    return results;
  };
  