function destinationMapper(input) {
  const locations = [];
  const pattern = /([=\/])(?<location>[A-Z][A-Za-z]{2,})\1/g;
  for (const location of input.matchAll(pattern)) {
    locations.push(location.groups.location);
  }
  let travelPoints = 0;
  locations.forEach((location) => {
    travelPoints += location.length;
  });
  console.log(`Destinations: ${locations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Haw=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
