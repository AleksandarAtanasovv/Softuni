function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);


    let swimNeeded = distanceInMeters * timeInSeconds;
    
    
    let slowness = Math.floor(distanceInMeters / 15); 
    let slowTime = slowness * 12.5;
  
   
    let totalTime = swimNeeded + slowTime;
    let difference = Math.abs(totalTime - recordInSeconds);
    if(totalTime < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
    
    
    

    
}
worldSwimmingRecord(["10464",
"1500",
"20"]);
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
