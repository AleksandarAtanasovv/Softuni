function repainting (input){
    let naylonInSqrm = Number(input[0]);
    let paintInLiters = Number(input[1]);
    let thinnerInLiters = Number(input[2]);
    let labourForWorkers = Number(input[3]);

    let totalPriceForNaylon = (naylonInSqrm + 2) * 1.50;
    let totalPriceForPaint = (paintInLiters + Number(input[1])* 0.1) * 14.50;
    let totalPriceForThinner = thinnerInLiters * 5.00;
    let totalPriceForBags = 0.40;
    let totalPriceForMaterials = totalPriceForNaylon + totalPriceForPaint + totalPriceForThinner + totalPriceForBags;

    let totalPriceForWorkers = (totalPriceForMaterials * 30 / 100) * labourForWorkers;
    let total = totalPriceForMaterials + totalPriceForWorkers;
    console.log(total);
    
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]
);
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)
