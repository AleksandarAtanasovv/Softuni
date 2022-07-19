function flowerShop(input){
    let magnolii = Number(input[0]);
    let zumbuli = Number(input[1]);
    let rozi = Number(input[2]);
    let kaktusi = Number(input[3]);
    let priceForTheGift = Number(input[4]);

    let totalSum = 3.25 * magnolii + 4 * zumbuli + 3.50 * rozi + 8 * kaktusi;
    
    let tax = (5/100) * totalSum

    let afterTax = totalSum - tax;
    let needed = priceForTheGift - afterTax;
    
    let left =  afterTax - priceForTheGift;
  
    

    if(afterTax < priceForTheGift){
        console.log(`She will have to borrow ${Math.ceil(needed)} leva.`);
    }
    else if(afterTax >= priceForTheGift){
        console.log(`She is left with ${Math.floor(left)} leva.`);
    }
 


}
flowerShop([
    "2",
    "3",
    "5",
    "1",
    "50"
    ]);
flowerShop([
"15",
"7",
"5",
"10",
"100"

])
