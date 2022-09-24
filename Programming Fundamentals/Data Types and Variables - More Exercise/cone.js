function cone(radius, height) {
  let volume = (1 / 3) * Math.PI * radius * radius * height;
  let slant = Math.sqrt(radius * radius + height * height);
  let totalArea = Math.PI * radius * slant + Math.PI * radius * radius;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3.3, 7.8);
