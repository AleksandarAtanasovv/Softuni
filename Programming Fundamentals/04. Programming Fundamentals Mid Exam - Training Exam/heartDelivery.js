function heartDelivery(arr) {
  let neighbourHood = arr.shift().split("@").map(Number);
  let line = arr.shift();
  let currentIndex = 0;
  let isSuccess = true;
  let failCounter = 0;
  while (line !== "Love!") {
    let [command, length] = line.split(" ");

    currentIndex += Number(length);

    if (currentIndex >= neighbourHood.length) {
      currentIndex = 0;
    }
    if (neighbourHood[currentIndex] === 0) {
      console.log(`Place ${currentIndex} already had Valentine's day.`);
    } else {
      neighbourHood[currentIndex] -= 2;
      if (neighbourHood[currentIndex] === 0) {
        console.log(`Place ${currentIndex} has Valentine's day.`);
      }
    }
    line = arr.shift();
  }
  console.log(`Cupid's last position was ${currentIndex}.`);
  for (const house of neighbourHood) {
    if (house !== 0) {
      isSuccess = false;
      failCounter++;
    }
  }
  if (isSuccess) {
    console.log("Mission was successful");
  } else {
    console.log(`Cupid has failed ${failCounter} places.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
