/**
 * @return {Function}
 */
function createHelloWorld(){
    return function(){
        return "Hello World"
    }
}

module.exports = createHelloWorld;


/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */