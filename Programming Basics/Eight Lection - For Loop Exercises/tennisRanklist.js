function tennisRanklist(input){
    let index = 0;
    let totalTournaments = Number(input[index]);
    index++
    let points = Number(input[index]);
    let pointsBonus = Number(input[index]);
    index++
    let wins = 0;


    for(let i = 0; i < totalTournaments; i++){
        let winOrNot = input[index];
        index++
        switch(winOrNot){
            case "W":
                points = points + 2000;
                wins++;
                break;
            case "F":
                points = points + 1200;
                break;
            case "SF":
                points = points + 720
                break;
        }

    }
    let withoutBonus = points - pointsBonus;
    let avg = (withoutBonus / totalTournaments);
    let winrate = wins / totalTournaments * 100;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avg)}`);

    console.log(`${winrate.toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])
