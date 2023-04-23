function compress(string) {
    const charArr = [];
    const countArr = Array(string.length).fill(0);
    let index = 0;
    charArr.push(string[0]);
    for (let i = 0; i < string.length; i++){
        if (charArr[index] !== string[i]){
            index+=1;
            charArr.push(string[i]);
        }
        countArr[index]+=1;
    }
    index = 0;
    let compressed = "";
    if (charArr.length * 2 > string.length){
        return string;
    }
    while (index < charArr.length){
        compressed += charArr[index]+countArr[index];
        index += 1
    }
    return compressed;
}

console.log(compress("abcccccccc"));