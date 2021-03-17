function checkMagazine(magazine, note) {

    for(let i = 0; i < note.length; i++){
            let finder = magazine.indexOf(note[i])
          //console.log("finder: " +finder);
            //console.log("i: " +i);
            if(finder != -1){
                //console.log(magazine);
                magazine[finder] = ""
                if(i === note.length - 1){
                    console.log("Yes")
                }
            }else{
               console.log("No")
               break
            }
        }
    //console.log(note);

}