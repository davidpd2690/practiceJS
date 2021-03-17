function maximumToys(prices, k) {
    
    let total = 0, count = 0;
    
    prices.sort(function(a,b){return a-b});
    
    for(let i = 0; i < prices.length; i++){
        total = total + prices[i];
        if(total <= k){
            count++;
        }
    }

    return count;
}