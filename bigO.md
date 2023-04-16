# The big O notation

## O(log n)
- This means time goes up linearly while the number of elements go up exponentially
- This is when the algorithm can skip a lot of elements based on some of their special features, for example when searching through a phone book, we don't have to read through the entire book, just need to search for name alphabetically

```javascript
function sum(node) {
	if(node == null){
		return 0;
	}
	return sum(node.left) + node.value + sum(node.right)
}
```
- This function touches each node only once so if there are N node, the complexity is log(N)

## Drop the constant
- We should drop the non dominant terms when estimate the time complexity
- For example if the complexity is:
	- log(2N) => log(N)
	- log(N^2 + N) => log(N^2)

## Recursive runtime
- Recursive calls are not necessarily log(n^2)
	```javascript
	function f(n) {
		if(n<=0){
			return 0;
		} 
		return f(n+1) + f(n-1)
	}
	```
- For each time `f()` is called, it spawns another 2, so the tree has a depth of n with the lower level has twice as many calls, therefore the complexity is log(2^n)