function movieDay(input){
    let timeForShooting = Number(input[0]);
    let amoutOfScenes = Number(input[1]);
    let sceneDuration = Number(input[2]);


    let timeForPreparing = timeForShooting * 15 / 100;

    let timeForShootingTheScenes = amoutOfScenes * sceneDuration;

    let timeForEverything = timeForPreparing + timeForShootingTheScenes;

    let timeLeft = timeForShooting - timeForEverything;

    let timeNeeded = timeForEverything - timeForShooting;
  
    

    if(timeForShooting < timeForEverything){
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    }else{
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeLeft)} minutes left!`);
    }

   
}
movieDay(["89","9","2"]);
movieDay(["60",
"15",
"3"])



