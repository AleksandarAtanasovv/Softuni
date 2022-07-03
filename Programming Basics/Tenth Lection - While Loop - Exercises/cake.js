function cake(input){   
    let index = 0;
    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++
    let wholeCake = width * length;
    let command = input[index];
    index++
    let sum =0 ;

    while(command !== 'STOP'){
        let piecesOfCake = Number(command);

        sum += piecesOfCake;

        if(sum > wholeCake){
            break;
        }
        command = input[index];
        index++
    }
    let diff = Math.abs(wholeCake - sum)
    if(sum >= wholeCake){
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }else{
        console.log(`${diff} pieces are left.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

