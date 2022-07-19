function mountainRun(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);


    let totalTimeInSecs = distanceInMeters * timeInSeconds;
    let slowness = Math.floor(distanceInMeters / 50) * 30;

    let totalTime = totalTimeInSecs + slowness;
    let diff = Math.abs(totalTime - recordInSeconds);

    if(totalTime >= recordInSeconds){
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
        
    }else{
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}
mountainRun(["10164",
"1400",
"25"])


