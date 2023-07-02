function robotinagrid(rows, columns){
	const ways = 0;
	const mem = {};
	const r = 0;
	const c = 0;
	//the robot can only go right and down
	//if it's able to go up and left as well, it will go in a circle
	return calculate(r, c, ways, mem, rows, columns);
}

function calculate(r, c, ways, mem, rows, columns){
	if (r == rows-1 && c == columns-1){
		ways++;
		return ways;
	}
	if (mem[r+"-"+c]){
		console.log("mem")
		return mem[r+"-"+c];
	}
	let result = 0;
	if (r < rows-1){
		result += calculate(r+1, c, ways, mem, rows, columns);
	}
	if (c < columns-1){
		result += calculate(r, c+1, ways, mem, rows, columns);
	}
	mem[r+"-"+c]=result;
	return result;
}

console.log(robotinagrid(10, 10));