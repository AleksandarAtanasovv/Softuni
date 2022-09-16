function login(arr) {
  let userName = "";
  userName = arr[0];
  let failCounter = 0;
  let reversedUsername = userName.split("").reverse().join("");
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr[i] !== reversedUsername) {
      failCounter++;
      if (failCounter === 4) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }

    if (arr[i] === reversedUsername) {
      console.log(`User ${userName} logged in.`);
      break;
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
