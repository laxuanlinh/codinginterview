import LinkedList, {Node} from './LinkedList.mjs';

function loopDetection(list){
    let current = list.head;
    while (current){
        if (current.visited === true){
            return current;
        }
        current.visited = true;
        current = current.next;
    }
    return null;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

const list = new LinkedList();
list.addNode(node1);
list.addNode(node2);
list.addNode(node3);
list.addNode(node4);
list.addNode(node5);
list.addNode(node6);
list.addNode(node6);

console.log(loopDetection(list));