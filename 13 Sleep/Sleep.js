/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
      setTimeout(resolve, millis);
    });
  }
  
  // Usage example:
  let t = Date.now();
  sleep(100).then(() => console.log(Date.now() - t)); // Output: Approximately 100
  
  module.exports = sleep;