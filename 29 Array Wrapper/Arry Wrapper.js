/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }
    
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);

console.log(obj1 + obj2); // Output: 10
console.log(String(obj1)); // Output: "[1,2]"
console.log(String(obj2)); // Output: "[3,4]"

module.exports = ArrayWrapper;