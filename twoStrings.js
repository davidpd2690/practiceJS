function twoStrings(s1, s2) {

    let len1 = s1.length;
    let len2 = s2.length;
    let found = false;
    
    if(len1 >= len2){
        for(let i = 0; i < len1; i++){
            if(s2.indexOf(s1[i]) != -1){
                console.log("YES")
                found = true;
                break;
            }
            else if(i === len1-1){
                console.log("NO");
                break;
            }
            //console.log(s1[i]);
        }
    }
    
    else{
        for(let i = 0; i < len2; i++){
            if(s2.indexOf(s1[i]) != -1){
                console.log("YES")
                found = true;
                break;
            }
            else if(i === len2-1){
                console.log("NO");
                break;
            }
        }

    }
    
    let ret = found ? "YES" : "NO";

    return ret;
}