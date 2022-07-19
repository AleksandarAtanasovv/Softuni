function timePlus15Minutes(input){  
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursInMinutes = hours * 60;
    let timeInMinutes = minutes + hoursInMinutes + 15;

    let hoursTwo = Math.floor(timeInMinutes / 60);
    let secondsTwo = timeInMinutes % 60;

    if(hoursTwo === 24){
        hoursTwo = 0;
    }

    if(secondsTwo >= 10){
        console.log(`${hoursTwo}:${secondsTwo}`);
    }else{
        console.log(`${hoursTwo}:0${secondsTwo}`);
    }
   
}
timePlus15Minutes(["12", "55"])