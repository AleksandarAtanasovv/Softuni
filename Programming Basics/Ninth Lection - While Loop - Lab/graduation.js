function graduation(input){
    let name = input[0];
    let expelled = 0;
    let grades = 1;
    let sum = 0;
    let index = 0;
    while(grades <= 12){
        index++
        let grade = Number(input[index])
        
        if(grade >= 4){
            sum += grade
            grades ++
        }else{
            expelled ++;
            break;
        }
      
        
    }
    
    let avgGrade = sum / 12;
        if(expelled >= 1){
            console.log(`${name} has been excluded at ${grades} grade`);
        }else{
            console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
        }

  
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
