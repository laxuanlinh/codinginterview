function powerset(arr){
	const mem = {};
	const index = 0;
	const subsets = [[arr[0]]];
	return calculate(mem, arr, 0, subsets);
}

function calculate(mem, arr, index, subsets){
	if (index == arr.length-1){
		return subsets
	}
	subsets.push([...subsets[subsets.length-1], arr[index+1]]);
	subsets.push([arr[index+1]]);
	return calculate(mem, arr, index+1, subsets);
}

console.log(powerset([1,2,3,4,5,6,7,8]));
