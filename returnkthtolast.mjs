import LinkedList, {Node} from './LinkedList.mjs'

function returnKth(k, array){
    if (array.size - 1 < k){
        return new LinkedList();
    }

    let index = 0;
    let current = array.head;
    while (current.next) {
        index++;
        current = current.next;
        if (index === k){
            array.head = current;
            break;
        }
    }
    return array;
}

const linkedList = new LinkedList();
linkedList.addNode(new Node(10));
linkedList.addNode(new Node(122));
linkedList.addNode(new Node(50));
linkedList.addNode(new Node(6));
linkedList.addNode(new Node(8));
linkedList.addNode(new Node(11));

console.log(returnKth(4, linkedList).toString());