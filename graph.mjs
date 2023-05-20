export class Node{
    constructor(value){
        this.value = value;
        this.children = []
    }
    link(node){
        this.children.push(node);
    }
}

export default class Graph {
    constructor(){
        this.nodes = []
    }
    add(node){
        this.nodes.push(node);
    }
    depthFirstSearch(value){
        for (let i in this.nodes){
            let node = this.search(value, this.nodes[i]);
            if (node){
                return node;
            }
        }
    }
    search (value, node){
        if (node.value === value){
            return node;
        }
        for (let i in node.children){
            let response = this.search(value, node.children[i]);
            if (response){
                return response;
            }
        }
        return null;
    }
}

const node1 = new Node(5);
const node2 = new Node(1);
const node3 = new Node(7);
const node4 = new Node(8);
const node5 = new Node(2);
const node6 = new Node(4);
const node7 = new Node(11);
const node8 = new Node(0);
const node9 = new Node(10);
node1.link(node5);
node3.link(node7);
node7.link(node2);
node3.link(node2);
node9.link(node6);
node2.link(node4);
const graph = new Graph();
graph.add(node1);
graph.add(node2);
graph.add(node5);
graph.add(node3);
graph.add(node8);

console.log(graph.depthFirstSearch(4));
