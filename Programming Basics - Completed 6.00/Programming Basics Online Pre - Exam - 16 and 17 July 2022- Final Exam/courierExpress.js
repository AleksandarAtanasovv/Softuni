function courierExpress(input){
    let weight = Number(input[0]);
    let type = input[1];
    let km = Number(input[2]);
    let total = 0;

       
    if(weight < 1){
        total = km * 0.03
    }else if(weight >= 1 && weight < 10){
        total = km * 0.05
    }else if(weight >= 10 && weight < 40){
        total = km * 0.10
    }else if(weight >= 40 && weight < 90){
        total = km * 0.15
    }else if(weight >= 90 && weight < 150){
        total = km * 0.20
    }
    
  
    if(type === 'express'){
        if(weight < 1){
            total = total + 0.8 * 0.03 * km * weight 
        }else if(weight >= 1 && weight < 10){
            total = total + 0.04 * 0.05 * km * weight 
           
        }else if(weight >= 10 && weight < 40){
            total = total + 0.05 * 0.10 * km * weight 
            
           
        }else if(weight >= 40 && weight < 90){
           
            total = total + 0.02 * 0.15 * km * weight 
           
            
            
        }else if(weight >= 90 && weight < 150){
            total = total + 0.01 * 0.20 * km * weight 
           
        }
       
    }
    
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`);
}
courierExpress(["1.5",
"standard",
"100"])


