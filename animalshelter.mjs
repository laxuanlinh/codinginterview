import Queue, {QueueNode} from "./queue.mjs";

class Animal {
    constructor(type, name){
        this.name = name;
        this.type = type;
    }
}

class Shelter {
    constructor(){
        this.queue = new Queue();
    }
    enqueue(animal){
        this.queue.add(new QueueNode(animal));
    }
    dequeue(){
        return this.queue.remove().data;
    }
    dequeueDog(){
        let current = this.queue.top;
        if (current.data.type === "Dog"){
            return this.queue.remove().data;
        }
        while (current) {
            if (current.next && current.next.data.type === "Dog"){
                let response = current.next;
                if (current.next.next){
                    current.next = current.next.next;
                }
                return response.data;
            }
            current = current.next;
        }
        return null;
    }
    dequeueCat(){
        let current = this.queue.top;
        if (current.data.type === "Cat"){
            return this.queue.remove().data;
        }
        while (current) {
            if (current.next && current.next.data.type === "Cat"){
                let response = current.next;
                if (current.next.next){
                    current.next = current.next.next;
                }
                return response.data;
            }
            current = current.next;
        }
        return null;
    }
}

const shelter = new Shelter();
shelter.enqueue(new Animal("Cat", "Anime"));
shelter.enqueue(new Animal("Dog", "GG"));
shelter.enqueue(new Animal("Cat", "Panda"));
shelter.enqueue(new Animal("Dog", "Lada"));
shelter.enqueue(new Animal("Dog", "Limbo"));
shelter.enqueue(new Animal("Cat", "Sisu"));

console.log(shelter.dequeue());
console.log(shelter.dequeue());
console.log(shelter.dequeue());
console.log(shelter.dequeueCat());
console.log(shelter.dequeueDog());
console.log(shelter.dequeue());