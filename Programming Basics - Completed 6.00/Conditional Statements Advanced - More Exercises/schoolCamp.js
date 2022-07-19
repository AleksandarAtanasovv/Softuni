function schoolCamp(input){
    let season = input[0];
    let typeOfGroup = input[1];
    let amountOfStudents = Number(input[2]);
    let amountOfNights = Number(input[3]);
    let finalPrice = 0;
    let typeOfSport = '';
    let typeOfTrip = '';
    switch(season){
        case "Winter":
            if(typeOfGroup === "girls" || typeOfGroup ==="boys"){
                finalPrice =  (amountOfStudents * 9.60) * amountOfNights;
            }else if(typeOfGroup === "mixed"){
                finalPrice = (amountOfStudents * 10.00) * amountOfNights
            }
            typeOfTrip = 'Winter-vacation'
            break;
        case "Spring":
            if(typeOfGroup === "girls" || typeOfGroup ==="boys"){
                finalPrice =  (amountOfStudents * 7.20) * amountOfNights;
            }else if(typeOfGroup === "mixed"){
                finalPrice = (amountOfStudents * 9.50) * amountOfNights
            }
            typeOfTrip = 'Spring-vacation'
            break;
        case "Summer":
            if(typeOfGroup === "girls" || typeOfGroup ==="boys"){
                finalPrice =  (amountOfStudents * 15.00) * amountOfNights;
            }else if(typeOfGroup === "mixed"){
                finalPrice = (amountOfStudents * 20.00) * amountOfNights
            }
            typeOfTrip = 'Summer-vacation'
            break;

    }
    if(typeOfGroup === "girls" && typeOfTrip === "Winter-vacation"){
        typeOfSport = 'Gymnastics'
    }else if(typeOfGroup === "girls" && typeOfTrip === "Spring-vacation"){
        typeOfSport = 'Athletics'
    }else if(typeOfGroup === "girls" && typeOfTrip === "Summer-vacation"){
        typeOfSport = 'Volleyball'
    }
    if(typeOfGroup === "boys" && typeOfTrip === "Winter-vacation"){
        typeOfSport = 'Judo'
    }else if(typeOfGroup === "boys" && typeOfTrip === "Spring-vacation"){
        typeOfSport = 'Tennis'
    }else if(typeOfGroup === "boys" && typeOfTrip === "Summer-vacation"){
        typeOfSport = 'Football'
    }
    if(typeOfGroup === "mixed" && typeOfTrip === "Winter-vacation"){
        typeOfSport = 'Ski'
    }else if(typeOfGroup === "mixed" && typeOfTrip === "Spring-vacation"){
        typeOfSport = 'Cycling'
    }else if(typeOfGroup === "mixed" && typeOfTrip === "Summer-vacation"){
        typeOfSport = 'Swimming'
    }

    if(amountOfStudents >= 50){
        finalPrice = finalPrice - (finalPrice * 50/100);
    }else if(amountOfStudents >= 20 && amountOfStudents <= 50){
        finalPrice = finalPrice - (finalPrice * 15/100);
    }else if(amountOfStudents >= 10 && amountOfStudents <= 20){
        finalPrice = finalPrice - (finalPrice * 5/100);
    }

    console.log(`${typeOfSport} ${finalPrice.toFixed(2)} lv.`);
}
schoolCamp([
    "Winter","mixed", "9", "15"
])