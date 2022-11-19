function adAstra(arr) {
  const pattern = /([|#])?(?<itemName>[A-Z][a-z]+[\s]*[A-Z]?[a-z?]+)\1?(?<date>\d{2}\/\d{2}\/\d{2})\1?(?<calories>\d{1,5})\1/g;
  let totalCalories = 0;
  let amountOfDays = 0;
  for (const el of arr) {
    for (const item of el.matchAll(pattern)) {
      totalCalories += Number(item.groups.calories);
    }
    amountOfDays = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(amountOfDays)} days!`);
    for (const item of el.matchAll(pattern)) {
      console.log(`Item: ${item.groups.itemName}, Best before: ${item.groups.date}, Nutrition: ${item.groups.calories}`);
    }
  }
}
adAstra(["$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|"]);
