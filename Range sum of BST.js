// Simple recursive Javascript JS solution, faster than 98.64% of JavaScript online submissions 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) 
{
    var sum=0, arr=[];
    
    function inOrder(root)
    {
        
        if(root == null)
            return 0;
        
        inOrder(root.left);
        if(root.val>=L && root.val<=R)
        {
            arr.push(root.val);
        }
        inOrder(root.right);
    }
    
    inOrder(root);
    
    arr.forEach(function(value,index){
        sum+=value;
    })
     return sum;
};