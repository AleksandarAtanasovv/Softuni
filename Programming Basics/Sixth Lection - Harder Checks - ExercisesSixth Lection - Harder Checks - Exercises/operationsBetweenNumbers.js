function operationsBetweenNumbers(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];

    switch(op){
        case "+":
            sol = n1 + n2;
            if(sol % 2 === 0){
                console.log(`${n1} ${op} ${n2} = ${sol} - even`);
            }else{
                console.log(`${n1} ${op} ${n2} = ${sol} - odd`);
            }
            break;
        case "-":
            sol = n1 - n2;
            if(sol % 2 === 0){
                console.log(`${n1} ${op} ${n2} = ${sol} - even`);
            }else{
                console.log(`${n1} ${op} ${n2} = ${sol} - odd`);
            }
            break;
        case "*":
            sol = n1 * n2;
            if(sol % 2 === 0){
                console.log(`${n1} ${op} ${n2} = ${sol} - even`);
            }else{
                console.log(`${n1} ${op} ${n2} = ${sol} - odd`);
            }
            break;
        case "/":
            sol = n1 / n2;
            if(n2 !== 0){
            console.log(`${n1} ${op} ${n2} = ${sol.toFixed(2)}`);
            }else{
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
        case "%":
            sol = n1 % n2;
            if(n2 !== 0){
                console.log(`${n1} ${op} ${n2} = ${sol}`);
                }else{
                    console.log(`Cannot divide ${n1} by zero`);
                }
    }
}
operationsBetweenNumbers(["10",
"0",
"%"])

