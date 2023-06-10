# Interview questions 

## Walking through a problem
- Pay attention to details of the question to help create an efficient algorithm
- Debug your example, is it a special case? Is it big enough?
- Start with brute force first, don't code yet. State a naive algorithm and its runtime then optimize from there
- Optimize using BUD (Bottleneck, Unecessary work, Duplicated work)
	- Look for any unused info about the problem
	- Solve it manually then revert engineer the thought process, how did you do it?
	- Solve it incorrectly and think about why it fails
	- Make time and space tradeoff, hash tables are very useful

## Optimize: Base case and build
- We can build a simple algorithm for a simple case and then build up from there
- Example: Design an algorithm that generates all permutations of a string, assuming all characters are unique
	- We can start by building an algorithm that genrate permutations of "ab".
	- Then we move to "abc" while the extra "c" is inserted into all possible positions of "ab" (cab, acb, abc)
	- We can build a recusive algorithm that generates permutations for S1...Sn string by chopping off the last character and build mutation of S1...Sn-1, then we insert Sn to all possible positions.
- Base case and build usually leads to recursion

## Optimize: Data structure and brainstorm
- We can run through all data structures and see which one works 
- For example: Numbers are randomly generated and stored into an expanding array, how to keep track of the median?
	- We can use a binary tree as it's very good at ordering and the top could be the median.
	- If we have an even number of numbers then the top might not be the median but there should be a workaround

## ArrayList
- ArrayList takes O(1) time complexity to add 1 element without expanding the capacity and O(n) to add while expanding because it needs to create a new array, copy the elements over and add one at the end

## Strings
- When dealing with strings, we can use counting sort as it's the best sorting algorithm for string, it can also easily identify if a string has unique characters or permutation check...
- Counting sort assumes the values are positive integer and within a range. It retains an empty array has that has length of the range. When skimming through an element, it will update the empty array by incrementing at the index equal to the value, if the element is duplicated then the value in the empty array is 2 or 3 ...

## Linked Lists
- There are singly linked list which each node only links to the next node and doubly linked node which each node links to both next and previous node.
- Linked list if faster than array list when inserting and removing but slower then searching because it has to loop through all elements
  ```javascript
	class Node {
		constructor (data){
			this.data = data;
			this.next = null;
		}
	}
	class LinkedList {
		constructor() {
			this.head = null;
			this.size = 0;
		}
		addNode(node){
			if (this.head === null){
				this.head = node;
			} else {
				let index = this.head;
				//find the tail 
				while (index.next){
					index = index.next;
				}
				//append new node to the tail
				index.next = node;
			}
			this.size+=1;
		}
		remove(node){
			if (this.head === null){
				return;
			}
			if (this.head.data === node.data){
				this.head = null;
				this.size = 0;
				return;
			}
			let index = this.head;
			while (index.next){
				if (index.next.data === node.data){
					index.next = index.next.next;
					this.size -= 1;
					break;
				}
				index = index.next;
			}
		}
	}

	let linkedList = new LinkedList();
	linkedList.addNode(new Node(10));
	linkedList.addNode(new Node(20));
	linkedList.addNode(new Node(30));
	linkedList.addNode(new Node(40));
	console.log(linkedList);
	linkedList.remove(new Node(30));
	console.log(linkedList);
  ```
- The runner technique is a technique used in some linked list problem. We have 2 pointers, 1 slow and 1 fast, the fast pointer is always twice as fast as the slow one.
- Let's say we need to check if a linked list is cyclic or not, we can run both pointers. If at some point, the fast pointer catches up with the slow one then we have a cyclic linked list. If the fast pointer encounter null node then we have an acyclic linked list.
  ```javascript
	function cyclic(linkedList){
		let slow = linkedList.head;
		let fast = linkedList.head.next;
		while (slow.next && fast.next && fast.next.next){
			slow = slow.next;
			fast = fast.next.next;
			if (slow.data === fast.data){
				return true;
			}
		}
		return false;
	}
	linkedList.addNode(linkedList.head);
	console.log(cyclic(linkedList));
  ```
- Some linked list problems can be solved using recursion. Recursion can be implemented iteratively but can be more complicated
- Linked list can be sorted using merge sort:
  - Given 2 sorted lists `left` and `right`, we need to merge them into 1 sort list by comparing first elements of both and add the smaller one to a buffer list until either `left` or `right` is empty, then we add buffer list, left and right together to have a sorted list
  - Merge sort is basically divide a list into smaller and smaller sublists that have 1 or 2 elements each then merge them together into a bigger sorted list.
  ```javascript
	function mergeArrays(left, right){
		let array = [];
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				array.push(left.shift())
			} else {
				console.log()
				array.push(right.shift())
			}
		}
		return [ ...array, ...left, ...right ]
	}
	function mergeSort(array){
		if (array.length < 2){
			return array;
		}
		const mid = array.length/2;
		const left = array.splice(0, mid);
		return mergeArrays(mergeSort(left), mergeSort(array));
	}
	let array = [1, 10, 22, 41, 0, 8];
	console.log(mergeSort(array));
  ```
- Sort linked list using merge sort:
  ```javascript
	function mergeSort(linkedList){
		if (!linkedList || !linkedList.head){
			return linkedList;
		}
		if (linkedList.size < 2 ){
			return linkedList;
		}
		let leftCurrent = linkedList.head;
		let index = 0;
		let left = new LinkedList();
		let right = new LinkedList();
		while (index < Math.floor(linkedList.size/2)){
			left.addNode(new Node(leftCurrent.data));
			leftCurrent = leftCurrent.next;
			index++;
		}
		right.addNode(leftCurrent);
		right.size+=linkedList.size - index - 1;
		return mergeLinkedList(mergeSort(left), mergeSort(right));
	}

	function mergeLinkedList(left, right){
		let currentLeft = left.head;
		let currentRight = right.head;
		let linkedList = new LinkedList();
		while (currentLeft && currentRight){
			if (currentLeft.data < currentRight.data){
				linkedList.addNode(new Node(currentLeft.data));
				left.remove(currentLeft);
				currentLeft = currentLeft.next;
			} else {
				linkedList.addNode(new Node(currentRight.data));
				right.remove(currentRight);
				currentRight = currentRight.next;
			}
		}
		
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
		linkedList.size+=left.size;
		linkedList.size+=right.size;
		return linkedList;
	}
  ```
- We can reverse a linked list by breaking the link to the next element and point it to the previous element but at the same time need to retain the original next element so that we don't break the linked list:
  - null -> 1 -> 2 -> 3 -> null
  - null <- 1 -> 2 -> 3 -> null
  - null <- 1 <- 2 -> 3 -> null
  - null <- 1 <- 2 <- 3 -> null
  ```javascript
	function reverse(node){
		let current = node;
		let prev = null;
		let next = null;
		while (current){
			//save the original next element
			next = current.next;
			//break the link to next and point to previous element
			current.next = prev;
			//move the currently previous element up to 1 position
			//so that the next loop can point to it as "next element"
			prev = current;
			//move the current pointer to the next element to continue
			current = next;
		}
		//the last loop sets current node to null
		//need to set it back to its previous element
		node = prev;
		return node;
	}
  ```

## Stack
- Stack is LIFO (last in first out)
- It has common methods such as :
  - pop(): return and remove the top element
  - peek(): return the top element
  - push(): add element on top the stack
  - isEmpty(): check if the stack is empty
  ```javascript
	class StackNode {
		constructor (data){
			this.next = null;
			this.data = data;
		}
	}

	class Stack {
		constructor (){
			this.top = null;
		}
		pop(){
			const result = this.top.data;
			this.top = this.top.next;
			return result;
		}
		peek(){
			return this.top.data;
		}
		push(data){
			const temp = this.top;
			this.top = new StackNode(data);
			this.top.next = temp;
		}
		isEmpty(){
			return this.top == null;
		}
	}
  ```
- Stack is useful for recursive algorithms when we need to push temporary data and then backtrack
- Stack can also allow us to write recursive algorithms iteratively

## Queue
- Queue is FIFO
  ```javascript
	export class QueueNode{
		constructor(data){
			this.data = data;
			this.next = null;
		}
	}

	export default class Queue{
		constructor(){
			this.top = null;
			this.tail = null;
		}
		add(node){
			if (this.tail==null){
				this.tail = node;
				this.tail.next = null;
			} else {
				this.tail.next = node;
				this.tail = this.tail.next;
			}
			if (this.top==null){
				this.top = this.tail;
			}
		}
		remove(){
			if (this.top == null){
				return null;
			}
			const result = this.top;
			this.top = this.top.next;
			return result;
		}
		peek(){
			return this.top;
		}
	}
  ```
- Queue is useful in Breadth-first search too keep track of nodes 

## Tree
- Each tree has a root node, a node can have zero or many child nodes
- Root node cannot contain cycles.
- A child node can have any data, it may or may not have links back to its parent
  ```javascript
	class Node {
		constructor(name){
			this.name = name;
			this.children = [];
		}
	}
  ```
- Trees are not very useful in interviews
- Binary tree: are trees that have up to 2 child nodes
  ```javascript
	class BinaryTree{
		constructor(value) {
			this.root = new Node(value);
		}
		add(value) {
			let current = this.root;
			while (current){
				if (value <= current.value){
					if (!current.left){
						current.addLeft(value);
						break;
					} else {
						current = current.left;
					}
				} else {
					if (!current.right){
						current.addRight(value);
						break;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
  ```
- `Binary search tree`: are trees that each node has left decendent <= node < right decendent and this must be true to all of its decendents
- `A balanced tree` is a binary search tree which the hight of the left and right of any subtree differ by no more than 1
- `A complete binary` tree is a tree almost filled except for the last level, the last level is filled from left to right
- `A full binary` tree is a tree in which each node either has zero or 2 child nodes
- `A perfect binary` tree is a tree that is both complete and full
- `In-order traversal` is to visit left node -> node -> right node
- `Pre order traversal` is to visit node -> left node -> right node
- `Post order traversal` is to visit left node -> right node -> node
- Min-heap is a complete binary tree that each node is smaller than its children.
- To insert to a min-heap, we first insert to the most rightmost bottommost node, then swap the node with its parent until it's no longer greater than the parent, the root of a min-heap is always the smallest.
- To extract a min-heap, first remove the root, replace it with the bottommost rightmost element, then swap the root with its children (the smaller one) until the proper order of the heap is restored

## Graph
- All trees are graphs but not all graphs are trees
- In graphs, a node can have 1 way or 2 way link to another node (vertex)
- Graphs can have cycles, graphs without cycles are called acyclic graphs
- There are 2 ways to represent a Graph: Adjacency list and Adjacency matrix
- Adjacency list:
  ```javascript
	class Node{
		constructor(value){
			this.value = value;
			this.children = []
		}
		link(node){
			this.children.push(node);
		}
	}
	class Graph {
		constructor(){
			this.nodes = []
		}
	}
  ```
- Adjacency matrix is a NxN boolean matrix where N is the number of node.
- If matrix[i][j]==true then the node i and j are connected.
- In an undirected graph, a adjancecy matrix is symmetric, in a directed matrix, it's not necessarily
- There are 2 common ways to search a graph: depth-first search and breadth-first search.
- Depth-first search is we search a branch first before moving to another branch, this is simpler
- Breadth-first search is we search all nodes of the current level before moving to the next level

## Bit manipulation
- Base 2: $101 = 1*2^2+0*2^1+1*2^0=5$
- Base 2 addition is similar to base 10, when we hit the limit, we carry the 1 over to the next digit 101 + 011=1000
- Negative numbers are stored in two's complement form, the first bit is used, 0 for positive and 1 for negative
- We can find the negative number of a number by asking what number to add to get 0.
- Example, if we use 8-bit integer: 00010010, we need to find a number added to give 10000000. We can use two's complement method by finding the smallest bit 1, keep all bits before it and flip all bits after it. In this case the result is 11101110
- Shifting bits to the left to multiply by 2 and to the right to divide by 2.
- Example: 11101001(-23) / 2 = 11110100(-12)
- In Arithmetic shift, we add the original first bit back to preserve number's sign.
- Bit masking is to apply AND, OR and XOR 
- Example: 1 & 1 = 1, 1 | 0 = 0, 0 ~ 0 = 0

## Dynamic programming
- Dynamic programming is basically recursion but with the result of the subproblem saved and used for the next calculation.
- One of the dynamic programming example is find Fibonancy number
  ```javascript
	function fibonancy(num){
		const map = {}; //map to memorize the result
		return calculate(map, num); //pass map and number to calculate
	}
	function calculate(map, num){
		if (map[num]){
			return map[num];//if it's already calculated, no need to go further
		} else if (num == 0){
			map[0] = 0;//memorize the result
			return 0;
		} else if (num == 1){
			map[1] = 1;//memorize the result
			return 1;
		}  
		const result = calculate(map, num-1) + calculate(map, num-2);//calculate the smaller problem
		map[num] = result;//memorize the result
		return result;
	}
	console.log(fibonancy(6));//8
  ```
- There are 2 ways to approach recursion, bottom-up and top-down
- Top-down is to divide the problem into smaller problem
- Bottom-up is to start with the smallest problem and work our way up until it reaches the original problem.