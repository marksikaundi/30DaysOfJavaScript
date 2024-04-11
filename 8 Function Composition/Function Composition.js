/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight((result, fn) => {
    return (x) => fn(result(x));
  });
};

module.exports = compose;
