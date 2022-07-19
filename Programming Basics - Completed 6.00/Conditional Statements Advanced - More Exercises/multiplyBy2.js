function multiplyBy2(input){
    let index = 0;
    
   
    while(true){
        num = Number(input[index]);
        index++;
        num = num * 2;
   
        if(num < 0){
            console.log('Negative number!');
            break;
        }
        if(num >= 0){
        console.log(`Result: ${num.toFixed(2)}`);
        }
    }

}
multiplyBy2(["-12"])