function easterBake(input){
    let amountOfBreads = Number(input[0]);
    let index = 1;
    let totalSugar = 0;
    let totalFlour = 0;
    let packetsOfSugar = 0;
    let packetsOfFlour = 0;
    let minFlour = Number.MIN_SAFE_INTEGER;
    let minSugar = Number.MIN_SAFE_INTEGER;
    for(let i =1; i <= amountOfBreads; i++ ){
        let sugar = Number(input[index]);
        index++;
        let flour = Number(input[index]);
        index++
        if(flour > minFlour){
            minFlour = flour
        }
        if(sugar > minSugar){
            minSugar = sugar;
        }
        
        totalSugar += sugar;
        totalFlour += flour;

        
        
    }
    packetsOfFlour = totalFlour / 750;
    packetsOfSugar = totalSugar / 950;

    console.log(`Sugar: ${Math.ceil(packetsOfSugar)}`);
    console.log(`Flour: ${Math.ceil(packetsOfFlour)}`);
    console.log(`Max used flour is ${minFlour} grams, max used sugar is ${minSugar} grams.`);
}
easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

