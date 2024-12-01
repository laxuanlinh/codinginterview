package com.company;

import java.util.*;

public class InorderTraversal {

    public static void main(String... args) {
        var input = new Integer[]{1,2,3,4,5,null,8,null,null,6,7,9};
        var root = fromList(input);
        System.out.println(inorderTraversal(root));
    }

    private static List<Integer> inorderTraversal(Node node){
        List<Integer> result = new ArrayList<>();
        if (node == null) {
            return result;
        }
        result.addAll(inorderTraversal(node.left));
        if (node.value != null) {
            result.add(node.value);
        }
        result.addAll(inorderTraversal(node.right));
        return result;
    }

    private static Node fromList(Integer[] tree){
        if (tree.length == 0) return null;
        Node root = new Node(tree[0]);
        Queue<Node> q = new LinkedList<>();
        q.add(root);
        for (int i = 1; i < tree.length; i++) {
            Node node = q.peek();
            if (node.left == null) {
                node.left = new Node(tree[i]);
                if (tree[i] != null) q.add(node.left);
            } else if (node.right == null) {
                node.right = new Node(tree[i]);
                if (tree[i] != null) q.add(node.right);
                q.remove();
            }
        }
        return root;
    }

}

class Node {
    Integer value;
    Node left;
    Node right;
    public Node(Integer value) {
        this.value = value;
    }
}
