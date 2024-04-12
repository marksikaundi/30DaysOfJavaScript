/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timeoutId;
    let cancelled = false;
  
    const cancelFn = () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  
    timeoutId = setTimeout(() => {
      if (!cancelled) {
        fn(...args);
      }
    }, t);
  
    return cancelFn;
  };
  
  module.exports = cancellable;