function flightSchedule(arr) {
  const flightStatus = arr[2][0];
  const flightsArr = [];

  arr[0].forEach((element) => {
    let [code, destination, lastElOfDest] = element.split(" ");
    let flightsObj = {};
    if (lastElOfDest) {
      flightsObj = {
        code: code,
        destination: `${destination} ${lastElOfDest}`,
      };
    } else {
      flightsObj = {
        code: code,
        destination: destination,
      };
    }
    flightsArr.push(flightsObj);
  });

  arr[1].forEach((el) => {
    let [code, status] = el.split(" ");
    flightsArr.forEach((el) => {
      if (el.code === code) {
        el.status = status;
      }
    });
  });

  for (const flight of flightsArr) {
    if (flight.status === flightStatus) {
      console.log(
        `{ Destination: '${flight.destination}', Status: '${flight.status}' }`
      );
    }
    if (flightStatus === "Ready to fly" && flight.status === undefined) {
      console.log(
        `{ Destination: '${flight.destination}', Status: 'Ready to fly' }`
      );
    }
  }
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
