function previousDay(year, month, day) {
  const time = new Date(year, month - 1, day - 1);
  const y = time.getFullYear();
  const d = time.getDate();
  const m = time.getMonth() + 1;

  console.log(`${y}-${m}-${d}`);
}
previousDay(2015, 5, 10);
