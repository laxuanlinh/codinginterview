export class TreeNode{
    constructor(value){
        this.value = value;
        this.children = []
    }
    add(value){ 
        node = new TreeNode(value)
        this.children.push(node);
    }
}

export class Tree{
    constructor(value){
        this.root = new TreeNode(value);
    }
}