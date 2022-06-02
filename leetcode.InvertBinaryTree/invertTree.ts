/**
 * Accepted code.
 * 02/06/2022
 * 
 * https://leetcode.com/problems/invert-binary-tree/
 **/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function invertTree(root: TreeNode | null): TreeNode | null {
    if(root != null){
        let right = null;
        let left = null;
        if(root.left != null){
            right = invertTree(root.left)
        }
        if(root.right != null){ 
            left = invertTree(root.right)
        }
        
        root.right = right
        root.left = left
        return root;
    }
    return null
};