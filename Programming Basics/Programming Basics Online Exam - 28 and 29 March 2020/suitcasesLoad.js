function suitcasesLoad(input){
    let index = 0;
    let trunkCapacity = Number(input[0]);
    index++
    let command = input[index];
    index++
    let amountOfSuitcasesStored = 0;
    while(command !== 'End'){
        let suitCaseSize = Number(command);
        
        if(index % 3 === 0){
            suitCaseSize += suitCaseSize * 10/100
        }
        if(trunkCapacity - suitCaseSize  < 0){
            break;
        }
        amountOfSuitcasesStored ++;
        trunkCapacity -= suitCaseSize;

        command = input[index];
        index++
      
    }
    if(command === 'End'){
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${amountOfSuitcasesStored} suitcases loaded.`);
    }else{
        console.log(`No more space!`);
        console.log(`Statistic: ${amountOfSuitcasesStored} suitcases loaded.`);
    }
    
}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])




