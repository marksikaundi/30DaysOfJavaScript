const assert = require("assert");
const EventEmitter = require("./Event Emitter");

describe("EventEmitter", () => {
  it("should subscribe to an event and emit it", () => {
    const emitter = new EventEmitter();
    let eventFired = false;

    const unsubscribe = emitter.subscribe("myEvent", () => {
      eventFired = true;
    });

    emitter.emit("myEvent");

    assert.strictEqual(eventFired, true);

    unsubscribe.unsubscribe();
  });

  it("should unsubscribe from an event", () => {
    const emitter = new EventEmitter();
    let eventFired = false;

    const callback = () => {
      eventFired = true;
    };

    const unsubscribe = emitter.subscribe("myEvent", callback);

    emitter.emit("myEvent");
    assert.strictEqual(eventFired, true);

    eventFired = false;
    unsubscribe.unsubscribe();

    emitter.emit("myEvent");
    assert.strictEqual(eventFired, false);
  });

  it("should emit an event with arguments", () => {
    const emitter = new EventEmitter();
    let result = 0;

    const callback = (a, b) => {
      result = a + b;
    };

    emitter.subscribe("add", callback);

    emitter.emit("add", [2, 3]);
    assert.strictEqual(result, 5);
  });

  it("should return an empty array if no subscribers for an event", () => {
    const emitter = new EventEmitter();

    const result = emitter.emit("nonExistentEvent");
    assert.deepStrictEqual(result, []);
  });
});
