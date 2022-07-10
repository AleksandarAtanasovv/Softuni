function specialNumbers(input){
    let n = Number(input[0]);
    let buffer = ""
    for(let x1 =1; x1 <= 9; x1++){
        
        for(let x2 = 1; x2 <= 9; x2++){
            for(let x3 = 1; x3 <= 9; x3++){
                for(let x4 =1; x4 <= 9; x4++){
                    if(n % x1 === 0 && n % x2 === 0 && n % x3 === 0 && n % x4 === 0){
                        buffer += `${x1}${x2}${x3}${x4} `
                        
                    }
                }
            }
        }
        
    }
    console.log(buffer);
    
}
specialNumbers(["3"])