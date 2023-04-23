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
