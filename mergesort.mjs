function mergeSort(array){
    if (array.length < 2){
        return array;
    }
    const mid = array.length/2;
    const left = array.splice(0, mid);
    return mergeArrays(mergeSort(left), mergeSort(array));
}

function mergeArrays(left, right){
    let array = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())
        } else {
            console.log()
            array.push(right.shift())
        }
    }
    return [ ...array, ...left, ...right ]
}

let array = [1, 10, 22, 41, 0, 8];
console.log(mergeSort(array));

