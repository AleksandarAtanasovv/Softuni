function histogram(input){
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for(let i = 1; i <= n; i++){
        let number = Number(input[i]);
        if(number < 200){
            p1++;
        }else if(number >= 200 && number <= 399){
            p2++;
        }else if(number >= 400 && number <= 599){
            p3++;
        }else if(number >= 600 && number <= 799){
            p4++;
        }else{
            p5++;
        }
    }
    p1Percentage = p1 / n * 100;
    p2Percentage = p2 / n * 100;
    p3Percentage = p3 / n * 100;
    p4Percentage = p4 / n * 100;
    p5Percentage = p5 / n * 100;

    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
    console.log(`${p4Percentage.toFixed(2)}%`);
    console.log(`${p5Percentage.toFixed(2)}%`);
    
}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])
