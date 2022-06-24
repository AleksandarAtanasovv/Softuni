function shopping(input){
    let petersBudget = Number(input[0]);
    let amoutOfCards = Number(input[1]);
    let amoutOfCpus = Number(input[2]);
    let amoutOfRam = Number(input[3]);

    let graphicsCardPrice = amoutOfCards * 250;
   
    let cpusPrice = (graphicsCardPrice/100) * 35 * amoutOfCpus;
    let ramPrice = (graphicsCardPrice /100) * 10 * amoutOfRam;
    let total = graphicsCardPrice + cpusPrice + ramPrice;

    if (amoutOfCards > amoutOfCpus){
        total = total - (total *15/100);
        
    }
    let diff = Math.abs(total - petersBudget);
    if(total <= petersBudget){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}
shopping(["900",
"2",
"1",
"3"])
shopping(["920.45",
"3",
"1",
"1"])

