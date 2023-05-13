import Stack, {StackNode} from "./Stack.mjs";
export const THRESHOLD = 5;
class SetOfStacks{
    constructor(){
        this.stacks = [];
    }
    push(data){
        const last = this.stacks.length - 1;
        if (last < 0 || this.stacks[last].size >= THRESHOLD){
            const newStack = new Stack();
            newStack.push(data);
            this.stacks.push(newStack);
        } else {
            this.stacks[last].push(data);
        }
    }
    peek(){
        const last = this.stacks.length - 1;
        if (last < 0){
            return null
        }
        return this.stacks[last].peek();
    }
    pop(){
        const last = this.stacks.length - 1;
        if (last < 0){
            return null;
        }
        const response = this.stacks[last].pop();
        if (this.stacks[last].size === 0){
            this.stacks.splice(last, 1);
        }
        return response;
    }
}

const set = new SetOfStacks();
set.push(1);
set.push(2);
set.push(3);
set.push(4);
set.push(5);
set.push(6);
set.push(7);
set.push(8);
set.push(9);
set.push(0);

console.log(set.peek());
console.log("Pop:")
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());
console.log(set.pop());

console.log("Push:")
set.push(91);
set.push(100);

console.log(set.peek());
