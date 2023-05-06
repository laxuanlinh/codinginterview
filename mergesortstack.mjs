import Stack, {StackNode} from "./Stack.mjs";

function mergeSortStack(arr){
    const stack1 = new Stack();
    const stack2 = new Stack();
    for (let i in arr){
        stack1.push([arr[i]]);
    }
    while (stack1.size > 1){
        while (stack1.size > 1){
            const left = stack1.pop();
            const right = stack1.pop();
            stack2.push(merge(left, right));
        }
        while (stack2.size > 1){
            const left = stack2.pop();
            const right = stack2.pop();
            stack1.push(merge(left, right));
        }
    }
    return merge(stack1.pop(), stack2.pop());
}

function merge(left, right){
    const array = [];
    while(left.length && right.length){
        if (left[0] < right[0]){
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return [...array, ...left, ...right];
}

let array = [1, 10, 22, 41, 0, 8];
console.log(mergeSortStack(array));