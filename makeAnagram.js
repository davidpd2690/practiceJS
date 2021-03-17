function makeAnagram(a, b) {
    
    let s1 = a;
    let s2 = b;
    
    s1.split('').forEach(n => {
        
        if (s2.includes(n)) {
            s1 = s1.replace(n, '');
            s2 = s2.replace(n, '');
        }
    });
    
    
    return s1.length + s2.length;
}