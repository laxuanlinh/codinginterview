function permutationUsingMap(str1, str2){
    const map1 = {};
    for(let i=0; i< str1.length; i++){
        if(map1[str1[i]]){
            map1[str1[i]] += 1;
        } else {
            map1[str1[i]] = 1;
        }
    }
    const map2 = {};
    for(let i=0; i< str2.length; i++){
        if(map2[str2[i]]){
            map2[str2[i]]+=1;
        } else {
            map2[str2[i]] = 1;
        }
    }
    for (let key in map1){
        if (!map2[key] || map1[key] > map2[key]){
            return false;
        }
    }
    return true;
}

function permutationCountingSort(str1, str2){
    const arr1 = Array(255).fill(0);
    const arr2 = Array(255).fill(0);
    for(let i=0; i< str1.length; i++){
        const ascii = str1.charCodeAt(i);
        arr1[ascii]+=1;
    }
    for(let i=0; i< str2.length; i++){
        const ascii = str2.charCodeAt(i);
        arr2[ascii]+=1;
    }
    for(let i=0; i<arr1.length; i++){
        if (arr1[i] > arr2[i]){
            return false
        }
    }
    return true;
}