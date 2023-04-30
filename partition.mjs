import LinkedList, {Node} from "./LinkedList.mjs";

function partition(array, x){
    const left = new LinkedList();
    const right = new LinkedList();
    let current = array.head;
    if (!array.head){
        return new LinkedList();
    }
    while (current.next){
        if (current.data < x){
            left.addNode(new Node(current.data));
        } else {
            right.addNode(new Node(current.data));
        }
        current = current.next;
    }
    current = left.head;
    while (current && current.next){
        current = current.next;
    }
    current.next = right.head;
    return left;
}

const linkedList = new LinkedList();
linkedList.addNode(new Node(10));
linkedList.addNode(new Node(5));
linkedList.addNode(new Node(87));
linkedList.addNode(new Node(1));
linkedList.addNode(new Node(4));
linkedList.addNode(new Node(65));
linkedList.addNode(new Node(3));
console.log(partition(linkedList, 65).toString());