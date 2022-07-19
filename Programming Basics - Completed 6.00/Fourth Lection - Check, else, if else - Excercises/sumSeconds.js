function sumSeconds(input){
    let firstRacer = Number(input[0]);
    let secondRacer = Number(input[1]);
    let thirdRacer = Number(input[2]);


    let totalTime = firstRacer + secondRacer + thirdRacer;

    let totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = totalTime % 60;

    if(totalSeconds < 10){
        console.log(`${totalMinutes}:0${totalSeconds}`);
    }else{
        console.log(`${totalMinutes}:${totalSeconds}`);
    }
    
}
sumSeconds(["14", "12",
"10"])



