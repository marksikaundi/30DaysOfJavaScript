class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const subscribers = this.events.get(eventName);
    subscribers.push(callback);

    const unsubscribe = () => {
      const index = subscribers.indexOf(callback);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
      return undefined;
    };

    return { unsubscribe };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }

    const subscribers = this.events.get(eventName);
    const results = [];

    for (const callback of subscribers) {
      results.push(callback(...args));
    }

    return results;
  }
}

// Example usage:
const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe();
console.log(emitter.emit("onClick")); // []

module.exports = EventEmitter;
