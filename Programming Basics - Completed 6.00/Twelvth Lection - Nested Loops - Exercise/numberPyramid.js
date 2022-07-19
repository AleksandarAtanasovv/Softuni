function numberPyramid(input){
    let n = Number(input[0]);
    let current = 1;
    let sum = "";
    let isBigger = false;
    for(let rows = 1; rows <= n; rows++){
        
        for(let cols = 1; cols <= rows; cols++){
            if(current > n){
                isBigger = true;
                break;
            }
            sum += current + " "
            current++
        }
        console.log(sum);
        sum = "";
        if(isBigger){
            break;
        }
    }
    

}
numberPyramid(["7"])