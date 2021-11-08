// 二叉树 遍历

function Traversal(root) {
  if (root != null) {
    console.log(root.val);
    Traversal(root.left);
    Traversal(root.right);
  }
}