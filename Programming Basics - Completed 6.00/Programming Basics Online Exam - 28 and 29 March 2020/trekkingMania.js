function trekkingMania(input){
    let amountOfGroups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let people = 0;
    let totalAmountOfPeople = 0;
    for(let i = 1; i <= amountOfGroups; i++){
        people = Number(input[i]);
        totalAmountOfPeople += people
        if(people <= 5){
            musala += people
        }else if(people >= 6 && people <= 12){
            monblan += people;
        }else if(people >= 13 && people <= 25){
            kilimandjaro += people
        }else if(people >= 26 && people <= 40){
            k2 += people;
        }else{
            everest += people;
        }
    }
    let musalap = (musala / totalAmountOfPeople) * 100;
    let monblanp = (monblan / totalAmountOfPeople) * 100;
    let kilimandjarop = (kilimandjaro / totalAmountOfPeople) * 100;
    let k2p = (k2 / totalAmountOfPeople) * 100;
    let everestp = (everest / totalAmountOfPeople) * 100;
    console.log(`${musalap.toFixed(2)}%`);
    console.log(`${monblanp.toFixed(2)}%`);
    console.log(`${kilimandjarop.toFixed(2)}%`);
    console.log(`${k2p.toFixed(2)}%`);
    console.log(`${everestp.toFixed(2)}%`);

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
