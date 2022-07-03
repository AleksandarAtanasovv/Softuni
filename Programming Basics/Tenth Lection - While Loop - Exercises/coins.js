function coins(input){
    let moneyInLv = Number(input[0])
    let levs = Math.floor(moneyInLv * 100);
    let coins = 0;
    while(levs > 0){
        coins++;
        if(levs >= 200){
            levs -= 200
            
        }else if(levs >= 100){
            levs -= 100
           
        }else if(levs >= 50){
            levs -= 50;
           
        }else if(levs >= 20){
            levs -= 20
            
        }
        else if(levs >= 10){
            levs -= 10
           
        }else if(levs >= 5){
            levs -= 5
           
        }
        else if(levs >= 2){
            levs -= 2
            
        }else{
            levs -= 1
           
        }
        
    }
    console.log(coins);
}
coins(["0"])