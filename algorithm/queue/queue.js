// implement queue by array

class QueueArray {
  constructor() {
    this.stack = [];
  }
  enqueue(val) {
    this.stack.push(val);
  }
  dequeue() {
    return this.stack.shift();
  }
}

class QueueLinkList {
  constructor() {
    this.head = null;
  }
  enqueue(val) {
    if (!this.head) {
      this.head = new Node(val);
      return;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(val);
  }
  dequeue() {
    if (!this.head) {
      return undefined;
    }
    let result = this.head.val;
    this.head = this.head.next;
    return result;
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
module.exports = {
  QueueArray,
  QueueLinkList,
};
