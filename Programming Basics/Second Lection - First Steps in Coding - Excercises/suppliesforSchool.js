function suppliesforSchool (input){
    let amountOfPens = Number(input[0]);
    let amountOfMarkers = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let totalPriceForPens = amountOfPens * 5.80;
    let totalPriceForMarkers = amountOfMarkers * 7.20;
    let totalPriceForLitersOfDetergent = litersOfDetergent * 1.20;

    let total = totalPriceForPens + totalPriceForMarkers + totalPriceForLitersOfDetergent;  
    let endAmount = total - (total* (discount / 100));

    console.log(endAmount);
    
}
suppliesforSchool(["2 ",
"3 ",
"4 ",
"25 "]

);