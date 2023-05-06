import LinkedList, {Node} from "./LinkedList.mjs";

function deleteMiddle(array){
    let index = 0;
    let current = array.head;
    while (current.next){
        if (index === Math.floor(array.getSize()/2)){
            array.remove(current);
            break
        }
        current = current.next;
        index ++;
    }
}

const linkedList = new LinkedList();
linkedList.addNode(new Node(1));
linkedList.addNode(new Node(2));
linkedList.addNode(new Node(3));
linkedList.addNode(new Node(4));
linkedList.addNode(new Node(5));
linkedList.addNode(new Node(6));
linkedList.addNode(new Node(7));

deleteMiddle(linkedList);
console.log(linkedList.toString());