function countSwaps(a) {
    
    let count = 0;
    let last = "", first = "";
    
    for (let i = 0; i < a.length; i++) {
    
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                count++;
            }
        }
    
    }
    
    first = a[0];
    last = a[a.length-1];
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${first}`);
    console.log(`Last Element: ${last}`);

}