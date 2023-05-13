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
        if (this.top == null){
            return null;
        }
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
    min(){
        let min = this.top;
        let current = this.top;
        while (current) {
            if (current.data < min.data){
                min = current;
            }
            current = current.next;
        }
        return min
    }
    toString(){
        let current = this.top;
        let str = [];
        while (current) {
            str.push(current.data);
            current = current.next;
        }
        return str;
    }
}

// const stack = new Stack();
// stack.push(3);
// stack.push(2);
// stack.push(6);
// stack.push(4);
// stack.push(5);
// stack.push(1);
// stack.push(0);
// stack.push(4);
// stack.push(6);
// stack.push(9);
// stack.push(7);
// console.log(stack.min())