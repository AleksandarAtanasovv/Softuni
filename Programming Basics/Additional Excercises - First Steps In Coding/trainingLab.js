function trainingLab(input){
    let h = Number(input[0]);
    let w = Number(input[1]);

    let widthInCm = w * 100;
    let lengthInCm = h * 100;

  
    

 

    let coloumns = Math.floor(( widthInCm - 100 ) / 70) ;

    let rows = Math.floor ( lengthInCm / 120 );

    let result = Math.floor ( ( coloumns * rows ) - 3 ) ;

 

    console.log(result)

}
trainingLab(["15",
    "8.9"
    ])