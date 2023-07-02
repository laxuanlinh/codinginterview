function triplestep(n){
	const ways = 0;
	const steps = 0;
	const mem = {};
	return calculate(mem, ways, steps, n);
}

function calculate(mem, ways, steps, n){
	if (steps == n){
		ways++;
		return ways;
	}
	if (mem[steps]){
		console.log("mem "+steps);
		return mem[steps];
	}
	let result = 0;
	if (n - steps<2) {
		result = calculate(mem, ways, steps+1, n);
	} else if (n - steps < 3) {
		result = calculate(mem, ways, steps+1, n) + calculate(mem, ways, steps+2, n);
	} else {
		result = calculate(mem, ways, steps+1, n) + calculate(mem, ways, steps+2, n) + calculate(mem, ways, steps+3, n);	
	}
	mem[steps] = result;
	return result;
}

console.log(triplestep(7));