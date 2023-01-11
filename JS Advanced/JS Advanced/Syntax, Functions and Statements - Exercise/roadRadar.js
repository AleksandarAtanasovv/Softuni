function roadRadar(speed, area) {
  const speeds = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  if (speeds[area] >= speed) {
    return `Driving ${speed} km/h in a ${speeds[area]} zone`;
  }
  let result = "";
  const difference = speed - speeds[area];
  if (difference >= 1 && difference <= 20) {
    result = `The speed is ${speed - speeds[area]} km/h faster than the allowed speed of ${
      speeds[area]
    } - speeding`;
  } else if (difference >= 20 && difference <= 40) {
    result = `The speed is ${difference} km/h faster than the allowed speed of ${speeds[area]} - excessive speeding`;
  } else {
    result = `The speed is ${difference} km/h faster than the allowed speed of ${speeds[area]} - reckless driving`;
  }
  return result;
}
console.log(roadRadar(40, "city"));
console.log(roadRadar(21, "residential"));
console.log(roadRadar(200, "motorway"));
