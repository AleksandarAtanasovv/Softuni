function tournamentOfChristmas(input){
    let index= 0;
    let days = Number(input[index]);
    index++
    let currentDayWin = 0;
    let currentDayLoss = 0;
    let totalWins = 0;
    let totalLoses = 0;
    let currentMoney = 0;
    let charity = 0;
for(let i =1; i <= days; i++){
    let command = input[index];
    index++
    while(command !== 'Finish'){
        let sport = command;
        let winOrLose = input[index];
        index++
        if(winOrLose === 'win'){
            currentMoney += 20;
            totalWins++;
        }else{
            totalLoses ++;
        }
        command = input[index]
        index++
    }
    
    if(totalWins > totalLoses){
        currentMoney += currentMoney * 0.10;
        currentDayWin++;
    }else{
        currentDayLoss ++;
    }
    totalLoses = 0;
    totalWins =0;
    charity += currentMoney;
    currentMoney = 0;
    
}



   if(currentDayWin > currentDayLoss){
    charity += charity * 20/100;
    console.log(`You won the tournament! Total raised money: ${charity.toFixed(2)}`);
   }else{
    console.log(`You lost the tournament! Total raised money: ${charity.toFixed(2)}`);
   }
}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])



