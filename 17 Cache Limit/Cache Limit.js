class TimeLimitedCache {
    constructor() {
      this.cache = new Map(); // Use Map for key-value storage
    }
  
    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration - time until expiration in milliseconds
     * @return {boolean} - true if un-expired key already existed
     */
    set(key, value, duration) {
      const existingEntry = this.cache.get(key);
      if (existingEntry && !this.isExpired(existingEntry)) {
        // Key exists and not expired, update value and duration
        this.cache.set(key, { value, expiry: Date.now() + duration });
        return true;
      }
  
      // New key or expired key, set new entry
      this.cache.set(key, { value, expiry: Date.now() + duration });
      return false;
    }
  
    /**
     * @param {number} key
     * @return {number} - value associated with key, -1 if not found or expired
     */
    get(key) {
      const entry = this.cache.get(key);
      if (!entry || this.isExpired(entry)) {
        return -1;
      }
      return entry.value;
    }
  
    /**
     * @return {number} - count of non-expired keys
     */
    count() {
      return [...this.cache.values()].filter((entry) => !this.isExpired(entry)).length;
    }
  
    isExpired(entry) {
      return Date.now() > entry.expiry;
    }
  }
  
  // Usage example
  const timeLimitedCache = new TimeLimitedCache();
  timeLimitedCache.set(1, 42, 1000); // false
  console.log(timeLimitedCache.get(1)); // 42
  console.log(timeLimitedCache.count()); // 1

  module.exports = TimeLimitedCache;