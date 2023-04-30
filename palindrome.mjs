import LinkedList, {Node} from "./LinkedList.mjs";
import reverse from "./reverselinkedlist.mjs";

function palindrome(list){
    const reversed = new LinkedList();
    reversed.head = reverse(list.head);
    let current = list.head;
    let currentReverse = reversed.head;
    while (current){
        if (current.data !== currentReverse.data){
            return false;
        }
        current = current.next;
        currentReverse = currentReverse.next;
    }
    return true;
}

const list = new LinkedList();
list.addNode(new Node(1));
list.addNode(new Node(2));
list.addNode(new Node(2));
list.addNode(new Node(1));

console.log(palindrome(list));