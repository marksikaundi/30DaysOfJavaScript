var join = function(arr1, arr2) {
    const map = new Map();
    for (const obj of arr1.concat(arr2)) {
      if (map.has(obj.id)) {
        map.set(obj.id, { ...map.get(obj.id), ...obj });
      } else {
        map.set(obj.id, obj);
      }
    }
  
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
  };

  module.exports = join;