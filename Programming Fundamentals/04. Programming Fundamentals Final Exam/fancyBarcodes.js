function fancyBarcodes(arr) {
  const regex = /@#+(?<productName>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  let _ = arr.shift();
  let digits = /\d+/g;
  for (const el of arr) {
    let barcode = regex.exec(el);
    let finalGroup = "";
    if (barcode) {
      let group = barcode.groups.productName.match(digits);
      if (group) {
        for (const item of group) {
          finalGroup += item;
        }
      } else {
        finalGroup = "00";
      }
      console.log(`Product group: ${finalGroup}`);
    } else {
      console.log("Invalid barcode");
    }
    barcode = regex.exec(el);
  }
}
fancyBarcodes(["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]);
