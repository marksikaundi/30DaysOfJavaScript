var flat = function(arr, n) {
    const result = [];
    const recurse = (array, depth) => {
      if (depth >= n) {
        result.push(...array); // Spread operator for individual elements
        return;
      }
      for (const item of array) {
        if (Array.isArray(item)) {
          recurse(item, depth + 1);
        } else {
          result.push(item);
        }
      }
    };
    recurse(arr, 0);
    return result;
  };

  module.exports = flat;