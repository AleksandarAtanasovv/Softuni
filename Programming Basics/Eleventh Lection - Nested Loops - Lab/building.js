function building(input) {
  let floorCount = Number(input[0]);
  let roomCount = Number(input[1]);

  for (let floor = floorCount; floor > 0; floor--) {
    let result = "";
    for (let room = 0; room < roomCount; room++) {
      if (floor === floorCount) {
        
        result += `L${floor}${room} `
      } else if (floor % 2 === 0) {
        result += `O${floor}${room} `
      } else if (floor % 2 !== 0) {
        result += `A${floor}${room} `
      }
    }
    console.log(result);
  }
}
building(["6", "4"]);
