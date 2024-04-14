var isEmpty = function(obj) {
    if (obj == null) return true;
  
    if (Array.isArray(obj)) return obj.length === 0;
  
    return Object.keys(obj).length === 0;
  };

  module.exports = isEmpty;