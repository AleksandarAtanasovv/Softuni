function flowers(input) {
  let amountOfChrisantemas = Number(input[0]);
  let amountOfRoses = Number(input[1]);
  let amountOfLilies = Number(input[2]);
  let season = input[3];
  let isHoliday = input[4];
  let finalPrice = 0;
  
  if(season === "Spring"){
    finalPrice = amountOfChrisantemas * 2.00 + amountOfRoses * 4.10 + amountOfLilies * 2.50;
    if(isHoliday === "Y"){
        finalPrice = finalPrice + (finalPrice * 15/100);
    }
    if(amountOfLilies > 7){
        finalPrice = finalPrice - (finalPrice * 5/100);
    }
  }
  else if(season === "Summer"){
    finalPrice = amountOfChrisantemas * 2.00 + amountOfRoses * 4.10 + amountOfLilies * 2.50;
    if(isHoliday === "Y"){
        finalPrice = finalPrice + (finalPrice * 15/100);
    }
    if(amountOfLilies > 7){
        finalPrice = finalPrice - (finalPrice * 5/100);
    }
  }
  else if(season === "Winter"){
    finalPrice = amountOfChrisantemas * 3.75 + amountOfRoses * 4.50 + amountOfLilies * 4.15;
    if(isHoliday === "Y"){
        finalPrice = finalPrice + (finalPrice * 15/100);
    }
    if(amountOfRoses >= 10){
        finalPrice = finalPrice - (finalPrice * 10/100);
    }
  }
  else if(season === "Autumn"){
    finalPrice = amountOfChrisantemas * 3.75 + amountOfRoses * 4.50 + amountOfLilies * 4.15;
    if(isHoliday === "Y"){
        finalPrice = finalPrice + (finalPrice * 15/100);
    }
    
  }
  let totalAmountOfFlowers = amountOfChrisantemas + amountOfRoses + amountOfLilies;
  if(totalAmountOfFlowers > 20){
    finalPrice = finalPrice - (finalPrice * 20/100);
  }
  finalPrice = finalPrice + 2;
  console.log(finalPrice.toFixed(2));
}
flowers(["3", "10", "9", "Winter", "N"]);
