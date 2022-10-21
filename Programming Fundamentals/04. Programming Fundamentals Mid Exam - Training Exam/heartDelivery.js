function heartDelivery(arr) {
  let neighbourHood = arr.shift().split("@").map(Number);
  let houseIndex = 0;

  for (const command of arr) {
    let [jump, length] = command.split(" ");
    if (jump === "Love!") {
      console.log(`Cupid's last position was ${houseIndex}.`);
      let failCounter = 0;
      for (const house of neighbourHood) {
        if (house > 0) {
          failCounter++;
        }
      }
      if (failCounter === 0) {
        console.log("Mission was successful");
      } else {
        console.log(`Cupid has failed ${failCounter} places.`);
      }
    }
    length = Number(length);
    houseIndex += length;

    if (houseIndex >= neighbourHood.length) {
      houseIndex = 0;
    }

    if (neighbourHood[houseIndex] === 0) {
      console.log(`Place ${houseIndex} already had Valentine's day.`);
    } else {
      neighbourHood[houseIndex] -= 2;
      if (neighbourHood[houseIndex] <= 0) {
        console.log(`Place ${houseIndex} has Valentine's day.`);
      }
    }
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
