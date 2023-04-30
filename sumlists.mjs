import LinkedList, {Node} from "./LinkedList.mjs";

function sumLists(list1, list2){
    let str1 = "";
    let str2 = "";
    list1.head = reverse(list1.head);
    list2.head = reverse(list2.head);
    let current = list1.head;
    while(current) {
        str1+=""+current.data;
        current = current.next;
    }
    current = list2.head;
    while(current) {
        str2+=""+current.data;
        current = current.next;
    }
    let result = parseInt(str1)+parseInt(str2);
    result = ""+result;
    const list = new LinkedList();
    for (let i in result){
        list.addNode(new Node(result[i]));
    }
    list.head = reverse(list.head);
    return list;
}

function reverse(node){
    let current = node;
    let prev = null;
    let next = null;
    while (current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

const list1 = new LinkedList();
list1.addNode(new Node(1));
list1.addNode(new Node(2));
list1.addNode(new Node(3));

const list2 = new LinkedList();
list2.addNode(new Node(4));
list2.addNode(new Node(5));
list2.addNode(new Node(6));
console.log(sumLists(list1, list2).toString());
