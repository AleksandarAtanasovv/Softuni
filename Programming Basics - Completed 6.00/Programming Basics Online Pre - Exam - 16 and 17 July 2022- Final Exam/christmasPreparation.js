function christmasPreparation(input){
    let amountOfPaperRolls = Number(input[0]);
    let amountOfRolls = Number(input[1]);
    let amountOfLitersGlue = Number(input[2]);
    let percent = Number(input[3]);

    let paperPrice = amountOfPaperRolls * 5.80;
    let platPrice = amountOfRolls * 7.20;
    let gluePrice = amountOfLitersGlue * 1.20;

    let total = paperPrice + platPrice + gluePrice;
    let discount = total * percent / 100;
    let fullTotal = total - discount

    console.log(fullTotal.toFixed(3));
}
christmasPreparation(["4",
"2",
"5",
"13"])

