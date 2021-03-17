/*
  Create a function that would detect if you hit the jackpot.
  
  The function will receive a four element array, and should return points depending on how many repetitions have you obtained. If the 4 elements are equal then you should print Jackpot.
  
  If  2 are equal then return 200,
  
  If 3 are equal then return 800;
  
  If all of them are equal return Jackpot!!;
  
  If none are equal return Try Again :(
  
  ex:
  
jackpot(["@", "@", "@", "@"]) ➞ "Jackpot!!"

jackpot(["aBc", "aBc", "aBc", "aBc"]) ➞ "Jackpot!!"


jackpot(["&&", "&&", "&&", "&"]) ➞ 800;

jackpot(["SS", "SS", "sS", "Ss"]) ➞ 200

*/

function jackpot(arr){
  
  //let isJackpot = false;
  let count = 0;
  let currentString = "";
  
  
  console.log("arr");
  
  for(let i = 0; i < arr.length; i++){
    
    //currentString = arr[i];
    
    console.log(`arr[i]: ${arr[i]}`);
    //console.log(`arr[j]: ${arr[j]}`)
  
    for(let j = 0; j < arr.length; j++){
    
      console.log(`arr[j]: ${arr[j]}`);
      
      if(arr[i] === arr[j]){
          
        count++;
      
    
      }
    
    }
    
    
  }
  
  
  if(count == 3){
   
    console.log("Jackpot!!!");
    
  }
  
  else if(count == 0){
  
    console.log("Try Again :(")
    
  }
  
  else{
  
    if(count == 1){
    
      console.log("200");
      
    }
    
    if(count == 2){
    
      console.log("800");
    
    }
    
  }
  
  
}


jackpot(["a", "b", "c", "b"]);