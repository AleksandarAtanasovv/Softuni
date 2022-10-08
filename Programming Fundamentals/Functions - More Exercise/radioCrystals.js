function radioCrystals(arr) {
  let finalThickness = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentThickness = arr[i];
    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    while (currentThickness !== finalThickness) {
      console.log(`Processing chunk ${currentThickness} microns`);
      while (currentThickness / 4 >= finalThickness) {
        currentThickness = cut(currentThickness);
        cutCount++;
      }
      if (cutCount > 0) {
        console.log(`Cut x${cutCount}`);
        console.log(`Transporting and washing`);
        currentThickness = transportingAndWashing(currentThickness);
      }
      while (currentThickness - currentThickness * 0.2 >= finalThickness) {
        currentThickness = lap(currentThickness);
        lapCount++;
      }
      if (lapCount > 0) {
        console.log(`Lap x${lapCount}`);
        console.log("Transporting and washing");
        currentThickness = transportingAndWashing(currentThickness);
      }
      while (currentThickness - 20 >= finalThickness) {
        currentThickness = grind(currentThickness);
        grindCount++;
      }
      if (grindCount > 0) {
        console.log(`Grind x${grindCount}`);
        console.log("Transporting and washing");
        currentThickness = transportingAndWashing(currentThickness);
      }
      while (currentThickness - 2 >= finalThickness - 1) {
        currentThickness = etch(currentThickness);
        etchCount++;
      }
      if (etchCount > 0) {
        console.log(`Etch x${etchCount}`);
        console.log("Transporting and washing");
        currentThickness = transportingAndWashing(currentThickness);
      }
      if (currentThickness < finalThickness) {
        currentThickness = xray(currentThickness);
        console.log("X-ray x1");
      }
    }
    console.log(`Finished crystal ${finalThickness} microns`);
  }
  function cut(crystal) {
    return crystal / 4;
  }
  function lap(crystal) {
    return (crystal -= crystal * 0.2);
  }
  function grind(crystal) {
    return crystal - 20;
  }
  function etch(crystal) {
    return crystal - 2;
  }
  function xray(crystal) {
    return crystal + 1;
  }
  function transportingAndWashing(crystal) {
    return Math.floor(crystal);
  }
}
radioCrystals([1000, 4000, 8100]);
