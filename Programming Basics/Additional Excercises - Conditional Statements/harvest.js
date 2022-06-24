function harvest(input){
    let wholeYard = Number(input[0]);
    let grapesForOneSquareMeter = Number(input[1]);
    let neededLitersOfWine = Number(input[2]);
    let amountOfWorkers = Number(input[3]);

    let grapesForTheWholeYard = wholeYard * grapesForOneSquareMeter;
    let wine = (40/100) * grapesForTheWholeYard / 2.5;

    let litersLeft = wine - neededLitersOfWine;
    let litersNeeded = neededLitersOfWine - wine;

    let winePerPerson = litersLeft / amountOfWorkers;
    if( wine >= neededLitersOfWine){
    console.log(`Good harvest this year! Total wine: ${Math.ceil(wine)} liters.
    ${Math.ceil(litersLeft)} liters left -> ${Math.ceil(winePerPerson)} liters per person.
    `);
    }else if(wine < neededLitersOfWine){
        console.log(`It will be a tough winter! More ${Math.floor(litersNeeded)} liters wine needed.`);
    }
}
harvest(["650",
    "2",
    "175",
    "3"
    ]);
harvest(["1020",
    "1.5",
    "425",
    "4"
    ])