function alternatingCharacters(s) {

    let count = 0;
    let left = s.length - count;
    
    //console.log(s);
    
    for(let i = 0; i < s.length-1; i++){
        //console.log(`s[i]: ${s[i]}, s[i+1]: ${s[i+1]}`);
        
        if(s[i]==s[i+1]){
            console.log(`s[i]: ${s[i]}, same as s[i+1]: ${s[i+1]}`);
            count++;
        }
        
        //i++;
    }
    console.log(s);
    console.log(count);
    
    return count
    
}