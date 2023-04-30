export class Node {
    constructor (data){
        this.data = data;
        this.next = null;
    }
}
export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    addNode(node){
        if (this.head === null){
            this.head = node;
        } else {
            let index = this.head;
            //find the tail 
            while (index.next){
                index = index.next;
            }
            //append new node to the tail
            index.next = node;
        }
        this.tail = node;
        this.size++;
    }
    remove(node){
        if (this.head === null){
            return;
        }
        if (this.head.data === node.data){
            if (this.head.next){
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.size--;
            return;
        }
        let index = this.head;
        while (index.next){
            if (index.next.data === node.data){
                index.next = index.next.next;
                this.size--;
                break;
            }
            index = index.next;
        }
    }
    toString() {
        if (!this.head){
            return "EMPTY";
        }
        let string = this.head.data;
        let current = this.head;
        while (current.next){
            string += ", "+current.next.data;
            current = current.next;
        }
        return string;
    }
}

