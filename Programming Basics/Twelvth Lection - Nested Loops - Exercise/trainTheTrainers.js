function trainTheTrainers(input){
    let index = 0;
    let amountOfJudges = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let amountOfPresentations = 0;
    let totalGrade = 0;
    let avgGradeAll  =0;
    let currentPresentationGrade = 0;
    while(command !== 'Finish'){
        let presentation = command;
        amountOfPresentations++;
        let tempGrade = 0;
        for(let i =0; i < amountOfJudges; i++ ){
            let grades = Number(input[index])
            index++
            tempGrade += grades
        }
        let avgGrade = tempGrade / amountOfJudges;
        totalGrade += avgGrade;
        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);
        

        command = input[index];
        index++
        
    }
    let avgGrade = totalGrade / amountOfPresentations;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
