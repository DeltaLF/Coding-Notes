const tree = require("./../../algorithm/tree/tree");

describe("tree", () => {
  test("tree right insert", () => {
    const bst = new tree.BinarySearchTree();
    for (let i = 0; i < 10; i++) {
      bst.bstInsert(i);
    }
    let node = bst.root;
    for (let i = 0; i < 10; i++) {
      const result = node.val === i;
      node = node.right;
      expect(result).toBe(true);
    }
  });

  test("tree left insert", () => {
    const bst = new tree.BinarySearchTree();
    for (let i = 0; i < 10; i++) {
      bst.bstInsert(10 - i);
    }
    let node = bst.root;
    for (let i = 0; i < 10; i++) {
      const result = node.val === 10 - i;
      node = node.left;
      expect(result).toBe(true);
    }
  });
});
