function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let finalPrice = 0;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {
            case 'banana':
                finalPrice = console.log((amount * 2.50).toFixed(2));
                break;
            case 'apple':
                finalPrice = console.log((amount * 1.20).toFixed(2));
                break;
            case 'orange':
                finalPrice = console.log((amount * 0.85).toFixed(2));
                break;
            case 'grapefruit':
                finalPrice = console.log((amount * 1.45).toFixed(2));
                break;
            case 'kiwi':
                finalPrice = console.log((amount * 2.70).toFixed(2));
                break;
            case 'pineapple':
                finalPrice = console.log((amount * 5.50).toFixed(2));
                break;
            case 'grapes':
                finalPrice = console.log((amount * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }

    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana':
                finalPrice = console.log((amount * 2.70).toFixed(2));
                break;
            case 'apple':
                finalPrice = console.log((amount * 1.25).toFixed(2));
                break;
            case 'orange':
                finalPrice = console.log((amount * 0.90).toFixed(2));
                break;
            case 'grapefruit':
                finalPrice = console.log((amount * 1.60).toFixed(2));
                break;
            case 'kiwi':
                finalPrice = console.log((amount * 3.00).toFixed(2));
                break;
            case 'pineapple':
                finalPrice = console.log((amount * 5.60).toFixed(2));
                break;
            case 'grapes':
                finalPrice = console.log((amount * 4.20).toFixed(2));
                break;
            default: console.log("error"); break;
        }
    }
    else {
        console.log('error');
    }
}
fruitShop(["tomato",
    "Workday",
    "0.5"])






