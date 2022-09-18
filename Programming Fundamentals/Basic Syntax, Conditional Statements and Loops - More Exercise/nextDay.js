function nextDay(year, month, day) {
  let date = new Date(year, (month -= 1), (day += 1));
  date.setDate(date.getDate());
  let yy = date.getFullYear();
  let mm = date.getMonth();
  let dd = date.getDate();
  return `${yy}-${mm + 1}-${dd}`;
}
nextDay(2016, 9, 30);
