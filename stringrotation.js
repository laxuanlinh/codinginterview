function isSubstring(str1, str2){
    let isSubstring = false;
    if (str1.length > str2.length){
        return false;
    }
    for (let i = 0; i<str2.length; i++){
        if (str2[i]===str1[0]){
            isSubstring = true;
            for (let j=0; j<str1.length; j++){
                if (str1[j]!==str2[i+j]){
                    isSubstring = false;
                    break;
                }
            }
            if (isSubstring){
                break;
            }
        }
    }
    return isSubstring;
}

function stringRotation(str1, str2){
    let rotationPos = 0;
    for (let i = 0; i < str1.length; i++){
        let found = true;
        for (let j = 0; j< str2.length-i; j++){
            if (str1[i+j] !== str2[j]){
                found = false;
                break;
            }
        }
        if (found){
            rotationPos = i;
            break;
        }
    }
    return str1.substring(rotationPos, str1.length+1) === str2.substring(0, str2.length - rotationPos) && 
            str1.substring(0, rotationPos) === str2.substring(str2.length - rotationPos, str2.length+1)
}
console.log(stringRotation("abcdefg", "efgabcd"));

//we need a way to divide s1 into xy so that yx = s2
//meaning xy is always s2s2 substring
function stringRotationUsingSubstring(str1, str2){
    return isSubstring(str1, str2+str2);
}
console.log(stringRotationUsingSubstring("abcdefg", "efgabcd"));