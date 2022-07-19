function readText(input){
    let index = 0;
   
    while(true){
        let text = input[index]
        if(text !== 'Stop'){
            let text = input[index]
            console.log(text);
            index++
            text = input[index];
        }else{
            break;  
        }
    }
    
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
