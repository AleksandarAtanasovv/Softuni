function workingHours(input){
    let time = Number(input[0]);
    let dayOfTheWeek = input[1]; 

    if(dayOfTheWeek != 'Sunday'){
        if(time >= 10 && time <= 18){
            console.log("open");
        }else{
            console.log("closed");
        }
    }else{
        console.log("closed");
    }
}
workingHours(["19",
"Friday"])


