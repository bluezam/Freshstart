// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
/* Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    if (!root) return [];
    const items = []; 
    const queue = [root, null]; 
    let levelNodes = []; 
  
    while (queue.length > 0) {
      const t = queue.shift();
  
      if (t) {
        levelNodes.push(t.val);
        if (t.left) {
          queue.push(t.left);
        }
        if (t.right) {
          queue.push(t.right);
        }
      } else {
        items.push(levelNodes);
        levelNodes = [];
        if (queue.length > 0) {
          queue.push(null);
        }
      }
    }
  
    return items;
  };
