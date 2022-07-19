function walking (input){
    let index = 0;
    let command = input[index];
    index++;
    let currentSteps = 0;



    let goal = 10000;
    let steps = 0;
    while(command !== "Going home"){
       currentSteps  = Number(command);
        steps += currentSteps
        if(steps >= goal){
            break;
        }
        
        command = input[index];
        index++
        
    }
   

    if(command === 'Going home'){
        currentSteps = Number(input[index])
        index++
        steps += currentSteps;
        
    }
    let diff = Math.abs(goal - steps)
    if(steps >= goal){
        console.log('Goal reached! Good job!');
        console.log(`${diff} steps over the goal!`);
    }else{
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["1000",
"1500",
"2000",
"6500"])






