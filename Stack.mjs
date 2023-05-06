export class StackNode {
    constructor (data){
        this.next = null;
        this.data = data;
    }
}

export default class Stack {
    constructor (){
        this.top = null;
        this.size = 0;
    }
    pop(){
        const result = this.top.data;
        this.top = this.top.next;
        this.size--;
        return result;
    }
    peek(){
        if (this.top == null){
            return null;
        }
        return this.top.data;
    }
    push(data){
        const temp = this.top;
        this.top = new StackNode(data);
        this.top.next = temp;
        this.size++;
    }
    isEmpty(){
        return this.top == null;
    }
}