function tradeCommissions(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let commision = 0;

  if (sales >= 0 && sales <= 500) {
    if (city === "Sofia") {
      commision = sales - (sales * 5) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    } else if (city === "Varna") {
      commision = sales - (sales * 4.5) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    } else if (city === "Plovdiv") {
      commision = sales - (sales * 5.5) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    }
    else{
        console.log('error');
    }
  } else if (sales > 500 && sales <= 1000) {
    if (city === "Sofia") {
      commision = sales - (sales * 7) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    } else if (city === "Varna") {
      commision = sales - (sales * 7.5) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    } else if (city === "Plovdiv") {
      commision = sales - (sales * 8) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    }
    else{
        console.log('error');
    }
  } else if (sales > 1000 && sales <= 10000) {
    if (city === "Sofia") {
      commision = sales - (sales * 8) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    } else if (city === "Varna") {
      commision = sales - (sales * 10) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    } else if (city === "Plovdiv") {
      commision = sales - (sales * 12) / 100;
      Math.abs((commision = sales - commision));
      console.log(commision.toFixed(2));
    }
    else{
        console.log('error');
    }
  }else if (sales > 10000) {
    if (city === 'Sofia') {
        commision = sales - (sales * 12 / 100);
        Math.abs(commision = sales - commision);
        console.log(commision.toFixed(2));
    } else if (city === 'Varna') {
        commision = sales - (sales * 13 / 100);
        Math.abs(commision = sales - commision);
        console.log(commision.toFixed(2));
    } else if (city === 'Plovdiv') {
        commision = sales - (sales * 14.5 / 100);
        Math.abs(commision = sales - commision);
        console.log(commision.toFixed(2));
    }
    else{
        console.log('error');
    }
}
else{
    console.log('error');
}
}
tradeCommissions(["Kaspichan", "-50"]);
