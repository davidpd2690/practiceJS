function rotLeft(a, d) {

    var temp = [], rot = [];
    var len = a.length;
    
    for(var i = 0; i < d; i++){
        temp.push(a[i]);
        
    }
    
    a.splice(0,d);
    
    for(var i = 0; i < a.length; i++)
    temp.splice(i,0,a[i]);
    
    console.log(a);
    console.log(temp);
    
    return temp;
}