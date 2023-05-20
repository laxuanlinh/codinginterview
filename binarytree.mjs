export class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    addLeft(value){
        this.left = new Node(value);
    }
    addRight(value) {
        this.right = new Node(value);
    }
}

export default class BinaryTree{
    constructor(value) {
        this.root = new Node(value);
    }
    add(value) {
        let current = this.root;
        while (current){
            if (value <= current.value){
                if (!current.left){
                    current.addLeft(value);
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right){
                    current.addRight(value);
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }
    inOrderTraversal(node){
        if (!node){
            return;
        }
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
    preOrderTraversal(node){
        if (!node){
            return;
        }
        console.log(node.value);
        this.inOrderTraversal(node.left);
        this.inOrderTraversal(node.right);
    }
    postOrderTraversal(node){
        if (!node){
            return
        }
        this.inOrderTraversal(node.left);
        this.inOrderTraversal(node.right);
        console.log(node.value);
    }
}

const tree = new BinaryTree(10);
tree.add(5);
tree.add(20);
tree.add(40);
tree.add(30);
tree.add(10);
tree.add(40);

tree.inOrderTraversal(tree.root);