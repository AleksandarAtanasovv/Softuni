function timeToWalk(steps, stepLength, speed) {
  const totalDistance = steps * stepLength;
  const metersPerSec = speed / 3.6;
  const time = totalDistance / metersPerSec;
  const rest = Math.floor(totalDistance / 500);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time % 60);

  console.log(
    `${hours < 10 ? "0" : ""}${hours}:${minutes + rest < 10 ? "0" : ""}${minutes + rest}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
  );
}
timeToWalk(4000, 0.6, 5);
