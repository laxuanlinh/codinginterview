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