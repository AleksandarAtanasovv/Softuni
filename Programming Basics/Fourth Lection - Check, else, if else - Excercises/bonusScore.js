function bonusScore (input){
    let points = Number(input[0]);
    let bonus = 0.0;

    if(points <= 100){
        bonus = bonus +5;
    }else if(points > 100 && points < 1000){
        bonus = bonus + (points*20/100);
    }else if(points > 1000){
        bonus = bonus + (points*10/100);        
    }
    if(points % 2 === 0){
        bonus = bonus + 1;
    }else if(points % 10 === 5){
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(points+bonus);
    
   
}
bonusScore(["15875"])