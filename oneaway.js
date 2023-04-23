//assume that str1's length is shorter than or equal to str2
function oneAway(str1, str2){
    let diff = false;
    let lengthDiff = 0;
    if (str2.length - str1.length > 1){
        return false;
    }
    for (let i=0; i<str1.length; i++){
        const value1 = str1[i];
        const value2 = str2[i+lengthDiff];
        if (!diff && value1 !== value2){
            if (str2.length - str1.length === 1){
                lengthDiff = 1;
                i -= 1;
            }
            diff = true;
        } else if (diff && value1 !== value2) {
            return false;
        }
    }
    return true;
}