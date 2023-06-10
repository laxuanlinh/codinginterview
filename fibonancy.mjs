function fibonancy(num){
    const map = {};
    return calculate(map, num);
}

function calculate(map, num){
    if (map[num]){
        return map[num];
    } else if (num == 0){
        map[0] = 0;
        return 0;
    } else if (num == 1){
        map[1] = 1;
        return 1;
    }  
    const result = calculate(map, num-1) + calculate(map, num-2);
    map[num] = result;
    return result;
}

console.log(fibonancy(10));