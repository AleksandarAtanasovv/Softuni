function lunchBreak(input){
    let showName = input[0];
    let lengthOfEpisode = Number(input[1]);
    let lengthOfBreak = Number(input[2]);

    let timeForLunch = lengthOfBreak * 0.125;
    let timeForChill = lengthOfBreak  * 0.25;
    let timeRemaining = lengthOfBreak - timeForChill - timeForLunch;
    let diff = Math.abs(timeRemaining - lengthOfEpisode)
    if(timeRemaining >= lengthOfEpisode){
        console.log("You have enough time to watch " + showName + " and left with " + Math.ceil(diff) + " minutes free time.");
    }else{
        console.log("You don't have enough time to watch " + showName + ", you need " + Math.ceil(diff) + " more minutes.");
    }
}
lunchBreak(["Game of Thrones",
"60",
"96"]);
lunchBreak(["Teen Wolf",
"48",
"60"])
