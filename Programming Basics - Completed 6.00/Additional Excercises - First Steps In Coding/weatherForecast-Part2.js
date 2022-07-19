function weatherForecastPart2(input){
    let weather = input[0];

   if(weather < 5.00){
    console.log("unknown");
   }
   else if(weather > 36.00){
    console.log("unknown");
   }
   else if(weather >= 26.00){
    console.log("Hot");
   }
   else if(weather >= 20.1){
    console.log("Warm");
   }
   else if(weather >= 15){
    console.log("Mild");
   }
   else if(weather >= 12.00){
    console.log("Cool");
   }
   else if(weather >= 5){
    console.log("Cold");
   }
}

weatherForecastPart2(["22.4", "8", "22.4"])