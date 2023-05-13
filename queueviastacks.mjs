import Stack, {StackNode} from "./Stack.mjs";

class QueueViaStacks {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    push(data) {
        this.stack1.push(data);
    }
    peek() {
        while (this.stack1.size > 0){
            this.stack2.push(this.stack1.pop());
        }
        const temp = this.stack2.peek();
        while (this.stack2.size > 0){
            this.stack1.push(this.stack2.pop());
        }
        return temp;
    }
    pop(){
        while (this.stack1.size > 0){
            this.stack2.push(this.stack1.pop());
        }
        const temp = this.stack2.pop();
        while (this.stack2.size > 0){
            this.stack1.push(this.stack2.pop());
        }
        return temp;
    }
}

const queue = new QueueViaStacks();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);
queue.push(9);
queue.push(0);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());