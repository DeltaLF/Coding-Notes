// implement linked list
class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  get(index) {
    console.log(index, this.length);
    if (index >= this.length) {
      console.log("fail to get node, index too large");
      return;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let node = this.head;
      this.head = newNode;
      newNode.next = node;
    }
    this.length++;
  }

  addAttail(val) {
    if (this.length === 0) {
      this.addAtHead(val);
      return;
    }
    const newNode = new Node(val);
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
    this.length++;
  }

  addAtIndex(index, val) {
    if (index > this.length) {
      console.log("fail to add node, index is too large");
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    let node = this.head;
    while (index > 1) {
      node = node.next;
      index--;
    }
    const newNode = new Node(val);
    let nodeNext = node.next;
    node.next = newNode;
    newNode.next = nodeNext;
    this.length++;
  }

  deleteAtIndex(index) {
    if (index > this.length - 1) {
      console.log("fail to delete, index too large");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let node = this.head;
    while (index > 1) {
      node = node.next;
      index--;
    }
    node.next = node.next.next;
    this.length--;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const firstLL = new linkedList();
firstLL.addAtHead(5);
firstLL.addAtHead(10);
firstLL.addAtHead(15);
firstLL.addAtHead(50);
firstLL.addAttail(-100);
firstLL.addAtIndex(0, 0.000001);
firstLL.addAtIndex(1, 1111111);
firstLL.addAtIndex(8, 88888888);
console.log("666");
firstLL.addAtIndex(6, 66666);
console.log("-----------------------");
console.log(firstLL);
console.log(firstLL.get(0));
console.log(firstLL.get(1));
console.log(firstLL.get(2));
console.log(firstLL.get(3));
console.log(firstLL.get(4));
console.log(firstLL.get(5));
console.log(firstLL.get(6));
console.log(firstLL.get(7));
console.log(firstLL.get(8));
firstLL.deleteAtIndex(0);
console.log(firstLL.get(0));
firstLL.deleteAtIndex(6);
console.log(firstLL.get(5));
