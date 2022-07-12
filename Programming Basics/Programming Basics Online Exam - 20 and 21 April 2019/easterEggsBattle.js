function easterEggsBattle(input){
    let index = 0;
    let amountOfEggsOne = Number(input[index]);
    index++
    let amountOfEggsTwo = Number(input[index]);
    index++
    let command = input[index];
    index++
    while(command !== 'End'){
        let player = command;

        if(player === 'one'){
            amountOfEggsTwo--;
        }else{
            amountOfEggsOne--;
        }
        if(amountOfEggsOne <= 0 || amountOfEggsTwo <= 0){
            break;
        }



        command = input[index];
        index++
    }
    if(amountOfEggsOne <= 0){
        console.log(`Player one is out of eggs. Player two has ${amountOfEggsTwo} eggs left.`);
    }else if(amountOfEggsTwo <= 0){
        console.log(`Player two is out of eggs. Player one has ${amountOfEggsOne} eggs left.`);
    }else{
        console.log(`Player one has ${amountOfEggsOne} eggs left.`);
        console.log(`Player two has ${amountOfEggsTwo} eggs left.`);
    }
}
easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"])