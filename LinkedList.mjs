export class Node {
    constructor (data){
        this.data = data;
        this.next = null;
        this.visited = false;
    }
}
export default class LinkedList {
    constructor() {
        this.head = null;
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
    }
    remove(node){
        if (this.head === null){
            return;
        }
        if (this.head === node){
            if (this.head.next){
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            return;
        }
        let index = this.head;
        while (index.next){
            if (index.next === node){
                index.next = index.next.next;
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
    getSize(){
        let current = this.head;
        let size = 0;
        while(current){
            size++;
            current = current.next;
        }
        return size;
    }
}

