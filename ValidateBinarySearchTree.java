package com.company;

public class ValidateBinarySearchTree {

    public static void main(String[] args) {
        var root = new TreeNode(3);
        var rootA = new TreeNode(2);
        var rootB = new TreeNode(1);
        var rootC = new TreeNode(Integer.MIN_VALUE);
        root.left = rootA;
        rootA.left = rootB;
        rootA.right = rootC;
        System.out.println(isValidBST(root));
    }

    public static boolean isValidBST(TreeNode root) {

        return (root.left == null || valid(root.left, null, root.val)) && (root.right == null || valid(root.right, root.val, null));

    }

    private static boolean valid(TreeNode root, Integer min, Integer max) {
        if (root == null) {
            return true;
        }
        if (min != null && root.val <= min)
            return false;
        if (max != null && root.val >= max)
            return false;

        return (root.left == null || valid(root.left, min, root.val)) && (root.right == null || valid(root.right, root.val, max));
    }


}

class TreeNode {
    int val;
    int maxLeft;
    int minRight;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
