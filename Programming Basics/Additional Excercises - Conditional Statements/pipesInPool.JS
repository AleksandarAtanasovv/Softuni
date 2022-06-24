function pipesInPool(input){
    let sizeOfPoolInLiters = Number(input[0]);
    let debitOfFirstPipe = Number(input[1]);
    let debitOfSecondPipe = Number(input[2]);
    let hours = Number(input[3]);

    let pipeOneDebit = debitOfFirstPipe * hours;    
    let pipeTwoDebit = debitOfSecondPipe * hours;  

    let totalLitersForTheDuration = pipeOneDebit + pipeTwoDebit;
    let total = (totalLitersForTheDuration / sizeOfPoolInLiters) * 100;

    let firstPipe = ((pipeOneDebit / totalLitersForTheDuration) * 100);
    let secondPipe = ((pipeTwoDebit / totalLitersForTheDuration) * 100);
  
    if(totalLitersForTheDuration <= sizeOfPoolInLiters){
    console.log(`The pool is ${total.toFixed(2)}% full. Pipe 1: ${firstPipe.toFixed(2)}%. Pipe 2: ${secondPipe.toFixed(2)}%.`);
    }
    else if(totalLitersForTheDuration > sizeOfPoolInLiters){
        let overFlow = Math.abs(totalLitersForTheDuration - sizeOfPoolInLiters);
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(overFlow.toFixed(2))} liters.`);
    }
}
pipesInPool(["1000",
"100",
"120",
"3"]);
pipesInPool(["100",
"100",
"100",
"2.5"
])

