function countingSortString(string){
    const arr = Array(255).fill(0);
    for (i = 0; i<string.length; i++){
        const ascii = string.charCodeAt(i);
        arr[ascii]+=1;
    }
    let sorted = "";
    for (i=0; i<arr.length; i++){
        if(arr[i]>0){
            for(j=0; j<arr[i]; j++){
                sorted += String.fromCharCode(i);
            }
        }
    }
    return sorted;
}