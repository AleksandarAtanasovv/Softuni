function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let accomodation = '';
    let finalPrice = 0;
    let location = '';

    if(season === "Summer"){
        if(budget <= 1000){
            accomodation = 'Camp';
            finalPrice = budget * 0.65;
            location = 'Alaska'
        }else if(budget > 1000 && budget <= 3000){
            accomodation = 'Hut';
            finalPrice = budget * 0.80;
            location = 'Alaska';
        }else if(budget > 3000){
            accomodation = 'Hotel';
            finalPrice = budget * 0.90;
            location = 'Alaska'
        }
    }else if(season === "Winter"){
        if(budget <= 1000){
            accomodation = 'Camp';
            finalPrice = budget * 0.45;
            location = 'Morocco';
        }else if(budget > 1000 && budget <= 3000){
            accomodation = 'Hut';
            finalPrice = budget * 0.60;
            location = 'Morocco';
        }else if(budget > 3000){
            accomodation = 'Hotel';
            finalPrice = budget * 0.90;
            location = 'Morocco'
        }
    }
    console.log(`${location} - ${accomodation} - ${finalPrice.toFixed(2)}`);
}
vacation(["799.50", "Winter"])