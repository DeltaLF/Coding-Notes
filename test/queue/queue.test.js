const queueClass = require("./../../algorithm/queue/queue");

describe("stack queue", () => {
  const newQueue = new queueClass.QueueArray();
  test("dequeue when empty", () => {
    const result = newQueue.dequeue();
    expect(result).toBeUndefined();
  });
  test("enqueue then dequeue", () => {
    const value = 100;
    newQueue.enqueue(value);
    const result = newQueue.dequeue();
    expect(result).toBe(value);
  });

  test("enqueue 3 then dequeue 3", () => {
    const value = [100, 1000, 1000];
    for (let i = 0; i < value.length; i++) {
      newQueue.enqueue(value[i]);
    }
    let result = true;
    for (let i = 0; i < value.length; i++) {
      result = result && newQueue.dequeue() === value[i];
    }

    expect(result).toBe(true);
  });
});

describe("linked list queue", () => {
  const newQueue = new queueClass.QueueLinkList();
  test("dequeue when empty", () => {
    const result = newQueue.dequeue();
    expect(result).toBeUndefined();
  });
  test("enqueue then dequeue", () => {
    const value = 100;
    newQueue.enqueue(value);
    const result = newQueue.dequeue();
    expect(result).toBe(value);
  });
  test("enqueue 3 then dequeue 3", () => {
    const value = [100, 1000, 1000];
    for (let i = 0; i < value.length; i++) {
      newQueue.enqueue(value[i]);
    }
    let result = true;
    for (let i = 0; i < value.length; i++) {
      result = result && newQueue.dequeue() === value[i];
    }

    expect(result).toBe(true);
  });
});
