function hotelRoom(input) {
    let month = input[0];
    let amountOfNights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
  
    switch (month) {
      case "May":
      case "October":
          studioPrice = amountOfNights * 50.00;
          apartmentPrice = amountOfNights * 65.00;
        if (amountOfNights > 7 && amountOfNights < 14) {
          
          studioPrice = studioPrice - (studioPrice * 5 / 100);
          
        }
        else if (amountOfNights > 14) {
          
          studioPrice = studioPrice - (studioPrice * 30 / 100);
          
          apartmentPrice = apartmentPrice - (apartmentPrice * 10 /100)
        }
        break;
      case "June":
      case "September":
          studioPrice = amountOfNights * 75.20;
          apartmentPrice = amountOfNights * 68.70;
          if (amountOfNights > 14) {
              
              studioPrice = studioPrice - (studioPrice * 20 / 100);
              
              apartmentPrice = apartmentPrice - (apartmentPrice * 10 /100)
            }
            break;
  
      case "July":
      case "August":
          apartmentPrice = amountOfNights * 77.00;
          studioPrice = amountOfNights * 76.00;
          if(amountOfNights > 14){
          apartmentPrice = apartmentPrice - (apartmentPrice * 10 /100)
          }
          break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    
}
hotelRoom(["May",
"8"])


