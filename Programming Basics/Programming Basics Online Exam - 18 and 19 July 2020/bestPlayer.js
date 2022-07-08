function bestPlayer(input){
    let index = 0;
    let command = input[index];
    index++
    let amountOfGoals = 0;
    let bestScore = 0;
    let bestPlayer = ''
    let biggestNumber = Number.MAX_SAFE_INTEGER;
    while(command !== 'END'){
        let name = command;
        let goals = Number(input[index]);
        index++
        if(goals > bestScore){
            bestPlayer = name;
            bestScore = goals;
        }
        amountOfGoals += goals
        if(amountOfGoals >= 10){
            break;
        }
       
        command = input[index];
        index++
        
        
    }
    console.log(`${bestPlayer} is the best player!`);
    
    if(bestScore >= 3){
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${bestScore} goals.`);
    }
}
bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])



