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
      const search = bst.bstSearch(i);
      if (!search) {
        expect(false).tobe(true);
      }
      expect(result).toBe(true);
      expect(bst.bstSearch(i).val).toBe(i);
    }
  });

  test("tree left insert", () => {
    const bst = new tree.BinarySearchTree();
    for (let i = 0; i < 10; i++) {
      bst.bstInsert(9 - i);
    }
    let node = bst.root;
    for (let i = 0; i < 10; i++) {
      const result = node.val === 9 - i;
      node = node.left;
      const search = bst.bstSearch(i);
      if (!search) {
        expect(false).tobe(true);
      }
      expect(result).toBe(true);
      expect(bst.bstSearch(i).val).toBe(i);
    }
  });
});
