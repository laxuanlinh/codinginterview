function unique(string) {
    const map = {};
    for(i=0; i<string.length; i++){
        if(map[string[i]]){
            return false;
        } 
        map[string[i]] = 1;
    }
    return true;
}
//O(N^2)
function uniqueWithoutMapBrute(string){
    for(i=0; i<string.length-1; i++){
        for(j=i+1; j<string.length; j++){
            if(string[i]===string[j]){
                return false;
            }
        }
    }
    return true;
}

//O(N + K)
function uniqueWithCountingSort(string){
    //ASCII counting array
    const arr = Array(255).fill(0);
    for(i=0; i<string.length;i++){
        const ascii = string.charCodeAt(i);
        if(arr[ascii]>0){
            return false;
        } 
        arr[ascii] += 1;
    }
    return true;
}

console.log(uniqueWithCountingSort("abcdgg"))
