/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        // If it's an array, map over its elements and compact each one
        return obj.map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        // If it's an object, iterate over its keys and compact each value
        const compacted = {};
        for (const key in obj) {
            const compactedValue = compactObject(obj[key]);
            if (compactedValue !== undefined && compactedValue !== null && compactedValue !== false) {
                // Only add to compacted object if the value is truthy
                compacted[key] = compactedValue;
            }
        }
        return compacted;
    } else {
        // For non-object values, return the value itself
        return obj;
    }
};

// Example usage:
const obj = {
    a: 0,
    b: null,
    c: {
        d: undefined,
        e: {
            f: 'hello',
            g: false,
            h: '',
            i: 123
        }
    },
    j: [null, false, '', 0, 123]
};

const compactedObj = compactObject(obj);
console.log(compactedObj);
