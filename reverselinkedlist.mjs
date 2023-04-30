export default function reverse(input){
    let node = JSON.parse(JSON.stringify(input));
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