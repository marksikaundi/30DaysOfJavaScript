var map = function(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

module.exports = map;
