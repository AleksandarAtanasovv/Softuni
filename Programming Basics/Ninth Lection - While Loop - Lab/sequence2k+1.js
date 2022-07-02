function sequence2kPlus1 (input){
    let n = Number(input[0]);
    let k = 1;
    while(true){
        console.log(k);
        k = 2 * k + 1;
        if(k > n){
            break;
        }
    }
    
}
sequence2kPlus1(["3"])