/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groups = {};
  
    for (const element of this) {
      const key = fn(element);
  
      if (!groups.hasOwnProperty(key)) {
        groups[key] = [];
      }
  
      groups[key].push(element);
    }
  
    return groups;
  };
  
  console.log([1, 2, 3].groupBy(String)); 
  
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
  ];
  console.log(people.groupBy(person => person.age)); 

  module.exports = Array.prototype.groupBy;
  