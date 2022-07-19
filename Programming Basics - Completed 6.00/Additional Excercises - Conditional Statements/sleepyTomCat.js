function sleepyTomCat(input){
    let weekendDays = Number(input[0]);

    let wholeYearWithWeekends = 365 - weekendDays;

    let playTime = (wholeYearWithWeekends * 63) + weekendDays * 127;

    let total = 30000 - playTime;
    let totalNeeded = playTime - 30000;

    let totalHoursNeeded = totalNeeded / 60;
    let totalMinutesNeeded = totalNeeded % 60;
    let totalHours = total / 60;
    let totalMinutes = total % 60;

    if(playTime <= 30000){
        console.log("Tom sleeps well");
        console.log(`${Math.floor(totalHours)} hours and ${Math.floor(totalMinutes)} minutes less for play
        `);
    }
    else if(playTime > 30000){
        console.log("Tom will run away");
        console.log(`${Math.floor(totalHoursNeeded)} hours and ${Math.floor(totalMinutesNeeded)} minutes more for play`);
    }
    
    
}
sleepyTomCat(["113"]);
