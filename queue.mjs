export class QueueNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export default class Queue{
    constructor(){
        this.top = null;
        this.tail = null;
    }
    add(node){
        if (this.tail==null){
            this.tail = node;
            this.tail.next = null;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        if (this.top==null){
            this.top = this.tail;
        }
    }
    remove(){
        if (this.top == null){
            return null;
        }
        const result = this.top;
        this.top = this.top.next;
        return result;
    }
    peek(){
        return this.top;
    }
}

const queue = new Queue();
queue.add(new QueueNode(1));
queue.add(new QueueNode(2));
queue.add(new QueueNode(3));
queue.add(new QueueNode(4));
console.log(queue.remove().data);
console.log(queue.remove().data);
console.log(queue.remove().data);
console.log(queue.remove().data);
