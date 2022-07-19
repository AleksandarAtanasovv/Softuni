function easterEggs(input){
    let amountOfEggs = Number(input[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let pcolor = '';
    for(let i = 1; i <= amountOfEggs; i++){
        let color = input[i];
        switch(color){
            case "red":
            red++;
            if(red > maxNum){
                maxNum = red;
                pcolor = 'red'
            }
            break;
            case "orange":
                orange++;
                if(orange > maxNum){
                    maxNum = orange;
                    pcolor = 'orange'
                }
                break;
            case "blue":
                blue++;
                if(blue > maxNum){
                    maxNum = blue;
                    pcolor = 'blue'
                }
                break;
            case "green":
                green++;
                if(green > maxNum){
                    maxNum = green;
                    pcolor = 'green'
                }
                break;
            
        }

    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxNum} -> ${pcolor}`);
}
easterEggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])
