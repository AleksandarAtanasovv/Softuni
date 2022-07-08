function balls(input){
    let amountOfBalls = Number(input[0]);
    let totalPoints = 0;
    let red = 0;
    let orange =0;
    let yellow = 0;
    let white =0;
    let black = 0;
    let other = 0;
    for(let i = 1; i <= amountOfBalls; i++){
        let typeOfBall = input[i];
        switch(typeOfBall){
            case "red":
                totalPoints += 5;
                red++
                break;
            case "orange":
                totalPoints += 10;
                orange++
                break;
            case "yellow":
                totalPoints += 15;
                yellow++
                break;
            case "white":
                totalPoints += 20;
                white++
                break;
            case "black":
                totalPoints = Math.floor(totalPoints /2);
                black++
                break;
            default:other++;break;
            
        }
    }
console.log(`Total points: ${totalPoints}`)
console.log(`Red balls: ${red}`)
console.log(`Orange balls: ${orange}`)
console.log(`Yellow balls: ${yellow}`)
console.log(`White balls: ${white}`)
console.log(`Other colors picked: ${other}`)
console.log(`Divides from black balls: ${black}`)
    
}
balls(["3",
"white",
"black",
"pink"])
