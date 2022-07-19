function trekkingMania(input){
    let amoutOfGroups = Number(input[0]);
    let totalTourists = 0;
    let musaala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    for(let i = 1; i < amoutOfGroups + 1; i++){
        let people = Number(input[i]);
        totalTourists += people
        if(people <= 5){
           musaala += people;
        }else if(people >= 6 && people <= 12){
           monblan += people;
        }else if(people >= 13 && people <= 25){
            kilimandjaro += people;
        }else if(people >= 26 && people <= 40){
            k2 += people
        }else if(people >= 41){
           everest += people;
        }
    }
    let p1 = (musaala / totalTourists) * 100;
    let p2 = (monblan / totalTourists) * 100;
    let p3 = (kilimandjaro / totalTourists) * 100;
    let p4 = (k2 / totalTourists) * 100;
    let p5 = (everest / totalTourists) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
    
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])


