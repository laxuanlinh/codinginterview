import Stack, {StackNode} from "./Stack.mjs";

function mergeSort(stack){
    if (stack.size < 2 ){
        return stack;
    }
    const left = new Stack();
    while (left.size < stack.size){
        left.push(stack.pop());
    }
    return mergeStacks(mergeSort(left), mergeSort(stack))
}

function mergeStacks(inputLeft, inputRight){
    let left = revert(inputLeft);
    let right= revert(inputRight);
    let merged = new Stack();
    while (left.size > 0 || right.size > 0){
        if ((left.size > 0 && right.size === 0) || (left.size > 0 && right.size > 0 && left.peek() < right.peek())){
            merged.push(left.pop());
        } else if ((right.size > 0 && left.size === 0) || (right.size > 0 && left.size > 0 && right.peek() < left.peek())){
            merged.push(right.pop());
        }
    }
    return merged;
}

function revert(stack){
    const reversed = new Stack();
    while (stack.size > 0){
        reversed.push(stack.pop());
    }
    return reversed;
}

const stack = new Stack();
stack.push(4);
stack.push(9);
stack.push(2);
stack.push(5);
console.log(revert(mergeSort(stack)).toString())