function examPreparation(input){
    let index = 0;
    let amountOfBadGradesAllowed = Number(input[index]);
    index++
    let command = input[index];
    index++
    let amountOfBadGrades = 0;
    let amountOfProblems = 0;
    let grade = 0;
    let avg = 0;
    let problemName = '';
    
    while(command !== "Enough"){
        problemName = command
        command = Number(input[index])
        index++
        amountOfProblems++;
        grade += command;

        if(command <= 4.00){
            amountOfBadGrades++;
        }
        if(amountOfBadGrades >= amountOfBadGradesAllowed){
            console.log(`You need a break, ${amountOfBadGrades} poor grades.`);
            break;
        }
        
        command = input[index]
        
        index++
        
        avg = grade / amountOfProblems;
        
        
    }
    if(amountOfBadGrades < amountOfBadGradesAllowed){
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${amountOfProblems}`);
        console.log(`Last problem: ${problemName}`);
    }
    
    
}
examPreparation(["3",
"Money",
"3",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"3",
"Enough"])

