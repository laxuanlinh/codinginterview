function palindromePermutation(string){
    const map = {};
    let oddFlag = false;
    for (let i = 0; i < string.length; i++){
        if (string[i]===" "){
            continue;
        }
        if (!map[string[i]]){
            map[string[i]] = 1;
        } else {
            map[string[i]] += 1;
        }
    }
    for (let key in map){
        if (map[key]%2===0){
            continue;
        }
        if (!oddFlag){
            oddFlag = true;
        } else {
            return false
        }
    }
    return true;
}