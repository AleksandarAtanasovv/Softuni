function skiTrip(input) {
  let days = Number(input[0]);
  let typeOfRoom = input[1];
  let grade = input[2];
  let finalPrice = 0;

  switch (typeOfRoom) {
    case "room for one person":
      finalPrice = (days - 1) * 18.0;
      break;
    case "apartment":
      finalPrice = (days - 1) * 25.0;
      if (days < 10) {
        finalPrice = finalPrice - (finalPrice * 30 / 100);
      } else if (days >= 10 && days <= 15) {
        finalPrice = finalPrice - (finalPrice * 35 / 100);
      } else {
        finalPrice = finalPrice - (finalPrice * 50/ 100);
      }
      break;
    case "president apartment":
        finalPrice = (days - 1) * 35.0;
      if (days < 10) {
        finalPrice = finalPrice - (finalPrice * 10 / 100);
      } else if (days >= 10 && days <= 15) {
        finalPrice = finalPrice - (finalPrice * 15 / 100);
      } else {
        finalPrice = finalPrice - (finalPrice * 20 / 100);
      }
      break;

  }
  if(grade === 'positive'){
    finalPrice = finalPrice + (finalPrice * 25/100)
  }else{
    
    finalPrice = finalPrice - (finalPrice * 10/100)
  }
  console.log(finalPrice.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"])


