/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (size <= 0) {
    return [];
  }

  const chunks = [];
  let startIndex = 0;

  while (startIndex < arr.length) {
    const chunk = arr.slice(startIndex, startIndex + size);
    chunks.push(chunk);
    startIndex += size;
  }

  return chunks;
};

module.exports = chunk;
