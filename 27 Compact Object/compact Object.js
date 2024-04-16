/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      let temp = [];
      for (let i = 0; i < obj.length; i++) {
        if (Boolean(obj[i])) temp.push(compactObject(obj[i]));
      }
      return temp;
    } else {
      let temp = {};
      for (let i in obj) {
        if (Boolean(obj[i])) temp[i] = compactObject(obj[i]);
      }
      return temp;
    }
  }
  return obj;
};

module.exports = compactObject;