function urlify(string){
    let spaceFlag = false;
    let url = "";
    for(let i=0; i<string.length; i++){
        if(string[i]===" " && !spaceFlag){
            spaceFlag = true;
            url+="%20";
        } else if (string[i]!==" ") {
            spaceFlag = false;
            url+=string[i]
        }
    }
    return url;
}