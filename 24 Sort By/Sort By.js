var sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
      const valA = fn(a);
      const valB = fn(b);
  
      if (valA < valB) {
        return -1;
      } else if (valA > valB) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  module.exports = sortBy;