import LinkedList, {Node} from './LinkedList.mjs'

function removeDups(linkedList){
    //sort linkedList
    linkedList = mergeSort(linkedList);
    let current = linkedList.head;
    while(current.next) {
        if (current.data === current.next.data){
            linkedList.remove(current);
        }
        current = current.next;
    }
    return linkedList;
}

function mergeSort(linkedList){
    if (!linkedList || !linkedList.head){
        return linkedList;
    }
    if (linkedList.getSize() < 2 ){
        return linkedList;
    }
    let leftCurrent = linkedList.head;
    let index = 0;
    let left = new LinkedList();
    let right = new LinkedList();
    while (index < Math.floor(linkedList.getSize()/2)){
        left.addNode(new Node(leftCurrent.data));
        leftCurrent = leftCurrent.next;
        index++;
    }
    right.addNode(leftCurrent);
    console.log("Left is "+left.toString());
    console.log("Right is "+right.toString());
    return mergeLinkedList(mergeSort(left), mergeSort(right));
}

function mergeLinkedList(left, right){
    console.log("Merging "+left+" and "+right);
    let currentLeft = left.head;
    let currentRight = right.head;
    let linkedList = new LinkedList();
    while (currentLeft && currentRight){
        console.log("Comparing "+currentLeft.data+" and "+currentRight.data);
        if (currentLeft.data < currentRight.data){
            linkedList.addNode(new Node(currentLeft.data));
            left.remove(currentLeft);
            currentLeft = currentLeft.next;
        } else {
            linkedList.addNode(new Node(currentRight.data));
            right.remove(currentRight);
            currentRight = currentRight.next;
        }
        console.log("After comparing we have "+linkedList);
    }
    console.log("After merging "+left.toString()+" "+right.toString());
    
    return append(linkedList, left, right);
}

function append(linkedList, left, right){
    if (left.head) {
        left.tail.next = right.head;
    } else {
        left.head = right.head;
    }
    if (linkedList.head){
        linkedList.tail.next = left.head;
    } else {
        linkedList.head = left.head;
    }
    return linkedList;
}

const arr = new LinkedList();
arr.addNode(new Node(10));
arr.addNode(new Node(5));
arr.addNode(new Node(8));
arr.addNode(new Node(2));
arr.addNode(new Node(6));
arr.addNode(new Node(10));
arr.addNode(new Node(6));
console.log(removeDups(arr).toString());