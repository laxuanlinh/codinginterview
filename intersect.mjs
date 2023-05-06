import LinkedList, {Node} from './LinkedList.mjs';

function intersect(list1, list2){
    let current1 = list1.head;
    while (current1) {
        let current2 = list2.head;
        while (current2){
            if (current1===current2){
                return current1;
            }
            current2 = current2.next;
        }
        current1 = current1.next;
    }
    return null;
}

function intersectButSmarter(list1, list2){
    const size2 = list2.getSize();
    const dummy = new Node(3);
    list1.addNode(dummy);
    return list2.getSize() - size2 === 1
}

function getIntersectingNode(list1, list2){
    let current = list1.head;
    while (current){
        current.visited = true;
        current = current.next;
    }
    current = list2.head;
    while (current){
        if (current.visited){
            return current;
        } 
        current = current.next;
    }
}

const node1 = new Node(3);
const node2 = new Node(4);
const node3 = new Node(1);
const node4 = new Node(2);
const node5 = new Node(1);
const node6 = new Node(5);
const node7 = new Node(6);

const list1 = new LinkedList();
list1.addNode(node1);
list1.addNode(node2);
list1.addNode(node3);
list1.addNode(node4);

const list2 = new LinkedList();
list2.addNode(node5);
list2.addNode(node6);
list2.addNode(node7);
list2.addNode(node2);

// console.log(intersect(list1, list2));
// console.log(intersectButSmarter(list1, list2));
console.log(getIntersectingNode(list1, list2));